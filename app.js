const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

app.post('/api/posts', (req, res) => {
    res.json({
        message: 'Post Created...'
    })
});

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        name: "Luyi Song",
        company: "Comcast"
    }
    token = jwt.sign(user, 'foo', (err, token) => {
        res.json({
            token
        });
        console.error('Error', err);
    });
});

app.listen(4200, () => console.log('server started on port 4200'));