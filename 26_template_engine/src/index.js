const express = require('express');
const app = express();

// to set the view engine
app.set('view engine', 'hbs');

// template engine route
app.get('/', (req, res) => {
    res.render('index', {
        name:"Sishir"
    });
});

app.listen(8000, () => {
    console.log("listening to the port number 8000");
});