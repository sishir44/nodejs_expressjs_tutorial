// import and create http module
const http = require('http');

// creating a web server
const server = http.createServer((req,res) => {
    res.end("Creating a web server...");
});

// to create a listening server
server.listen(8000, () => {
    console.log("Starting...");
});