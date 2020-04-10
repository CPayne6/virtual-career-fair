const express = require('express');
const app = express();
const mongoose = require("mongoose");


require('dotenv').config(); // Import environment variables

require('./router')(app);   // Initialize all routes

app.get('/', (req, res) => {
    res.send('Hello');
});

mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Connected to mongoDB "))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => {console.log(`app running on port ${process.env.PORT}`)});