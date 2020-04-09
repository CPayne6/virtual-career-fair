const express = require('express');
const app = express();

require('dotenv').config(); // Import environment variables

require('./router')(app);   // Initialize all routes

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(process.env.PORT, () => {console.log(`app running on port ${process.env.PORT}`)});