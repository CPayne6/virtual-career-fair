const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json()); // Set up body and cookie parser (for data transfer and authentication respectively)
app.use(cookieParser());

require('dotenv').config(); // Import environment variables
require('./router')(app);   // Initialize all routes

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(process.env.PORT, () => {console.log(`app running on port ${process.env.PORT}`)});