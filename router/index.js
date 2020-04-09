const express = require('express');
const api = require('./api');
const stream = require('./stream');

module.exports = (app) => {

    app.use('/api', api);
    app.use('/stream', stream);
    // Do the same for other features
}