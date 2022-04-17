const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res, next) =>{
    res.status(200).json('Welcome Express !')
})

module.exports = app;