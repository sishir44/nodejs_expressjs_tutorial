// we can rename views directory by using below code.

const express = require('express');
const app = express();
const path = require('path');

const templatePath = path.join(__dirname, '../templates');

// to set the view engine
app.set('view engine', 'hbs');

// to rename views to template
app.set("views", templatePath);

// template engine route
app.get('/', (req, res) => {
    res.render('index', {
        name:"Sishir"
    });
});

app.listen(8000, () => {
    console.log("listening to the port number 8000");
});