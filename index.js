const fs = require('fs');

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', (req, res, next) => {
    res.sendFile('./index.html', {root: __dirname});
});

app.get('/about', (req, res, next) => {
    res.sendFile('./about.html', {root: __dirname});
});

app.get('/contact-me', (req, res, next) => {
    res.sendFile('./contact-me.html', {root: __dirname});
});

app.get('*', (req, res, next) => {
    res.statusCode = 404;
    res.sendFile('./404.html', {root: __dirname});
});

console.log('Listening on port 8080');

app.listen(8080);