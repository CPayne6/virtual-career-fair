const express = require('express');

const account = require('./account');
const payment = require('./payment');
// Add more for each new folder

// configure each route on a different router
exports = (app) => {
    
    const apiRouter = express.Router();

    apiRouter.use('/account', account);
    apiRouter.use('/payment', payment);
    
    app.use('/api', apiRouter);
}
