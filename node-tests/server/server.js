const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({ 
        error: 'Page not found.',
        name: 'ToDo App v1.0'
    });
});

app.get('/users', (req, res) => {
    var users = [
        { name: 'mtg', age: 20 },
        { name: 'Jobs', age: 55 }
    ];
    res.send(users);
})

const port = process.env.PORT || 3000;
const ip = process.env.IP || "0.0.0.0";
app.listen(port, ip, () => {
    console.log('Server is up.')
});

module.exports.app = app;
