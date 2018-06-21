const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const secretKey = 'secretKey';

// Welcome page
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

// Test Post method
app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        else {
            res.json({
                message: 'Posts Created...',
                authData
            })
        }
    });
});

// Get auth token
app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        name: "Luyi Song",
        company: "Comcast"
    }
    token = jwt.sign({user}, secretKey, {expiresIn: '10h'}, (err, token) => {
        res.json({
            token
        });
    });
});

// Format token
// Authorization: Bearer <token>

// Verify token
function verifyToken(req, res, next) {
    // Get auth header
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.listen(4200, () => console.log('server started on port 4200'));