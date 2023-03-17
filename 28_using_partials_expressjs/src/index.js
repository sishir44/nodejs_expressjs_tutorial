const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');

// register path to partials and views
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '..templates/partials');

// to set the view engine
app.set('view engine', 'hbs');
app.set("views", templatePath);

// hbs register
hbs.registerPartials(partialsPath);

// to rename views to template
app.set("views", templatePath);

// template engine route
app.get('', (req, res) => {
    res.render('index', {
        name:"Sishir"
    });
});

app.listen(8000, () => {
    console.log("listening to the port number 8000");
});