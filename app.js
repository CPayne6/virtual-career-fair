const express = require('express');
const app = express();
const mongoose = require("mongoose");
const env = require('./config');     // import environment variables
const router = require('./api/router'); // import routes
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json()); // Set up body and cookie parser (for data transfer and authentication respectively)


app.use('/api', router);    // Initialize all routes

app.get('/', (req, res) => {
    res.send('Hello');
});

mongoose
    .connect(env.dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Connected to mongoDB "))
    .catch(err => console.log(err));

app.listen(env.port, () => {console.log(`app running on port ${env.port}`)});