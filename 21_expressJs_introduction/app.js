// creating express application.
const express = require('express');
const app = express();

//app.get(route,callback);  // Syntax
app.get("/", (req, res) => {
    res.send("Hello world from techy sishir");
});
app.get("/about", (req, res) => {
    res.send("Hello world from about page");
});
app.listen(8000, () => {
    console.log("listening the port 8000");
});