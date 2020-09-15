const http = require("http")
const express = require("express");
const { dirname } = require("path");
const app = express()
const fs = require('fs')

app.get('/', function (req, res) {
    res.send('Olá Mundo!');
    console.log(req)
});

//Servidor WEB
app.get('*', function (req, res) {
    var file = __dirname + '/public/' + req.path + '.html';
    var error = __dirname + '/public/404.html';
    fs.access(file, fs.F_OK, (err) => {
        if (err) {
            console.error(err)
            res.sendFile(error);
            return
        }
        res.sendFile(file)
    })
});

app.listen(3000, function () {
    console.log('App escutando na porta 3000!');
});