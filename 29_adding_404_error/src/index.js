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
// index page render an homepage
app.get('', (req, res) => { 
    res.render('index', {
        name:"Sishir"
    });
});

// about page render
app.get('/about', (req, res) => { 
    res.render('about');
});

// shown 404-error msg when we give invalid route after a about page
app.get('/about/*', (req, res) => { 
    res.render('404', {
        errorcomment:"The page is Invalid 404 error",
    });
});

// show 404-error messages for all invalid routes
app.get('*', (req, res) => { 
    res.render('404', {
        errorcomment:"The page is Invalid 404 error",
    });
});

app.listen(8000, () => {
    console.log("listening to the port number 8000");
});