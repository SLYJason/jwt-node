const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
    console.log(req);
    console.log(res);
});

app.listen(4200, () => console.log('server started on port 4200'));