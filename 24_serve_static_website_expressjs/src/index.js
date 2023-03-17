const express = require('express');
const path = require('path');
const app = express();

//css: relative and absolute
const staticPath = path.join(__dirname, "../public");

// built-in middleware:
app.use(express.static(staticPath));

// app.get(route, callback)
app.get('/', (req, res) => {
    res.send("Welcome to my home page!");
});

app.get('/about', (req, res) => {
    res.status(200).send("Welcome to my about page!");
});

app.listen(8000, () => {
    console.log("listening to the port number 8000");
});