const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { notFound, errorHandler } = require('./middlewares')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Our routes will go here.
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Book Tracker 📚'
    })
})

// If no routes are found
app.use(notFound)
app.use(errorHandler)

module.exports = app;