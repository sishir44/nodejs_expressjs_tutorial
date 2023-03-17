const express = require('express');
const app = express();
const port = 5000;


// app.get(route, callback)
app.get('/', (req, res) => {
    res.write("<h1>Welcome to my home page!</h1>");
    res.write("<h2>Welcome to my home page!</h2>");
    res.send();
});

app.get('/about', (req, res) => {
    res.status(200).send("Welcome to my about page!");
});

app.get('/contact', (req, res) => {
    res.send("Welcome to my contact page!");
});

app.get('/temp', (req, res) => {
    //res.send also we can write
    res.json([
        {
            id: 1,
            name: "sishir"
        },
        {
            id: 2,
            name: "rachu"
        },
        {
            id: 3,
            name: "bohara"
        },
    ]);
});

app.listen(port, () => {
    console.log(`listening to the port number ${port}`);
});