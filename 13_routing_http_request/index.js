// import and create http module
const http = require('http');

// creating a web server
const server = http.createServer((req,res) => {
    //console.log(req.url);
    if (req.url == "/") {
        res.end("It is home page");
    } else if (req.url == "/about") {
        res.end("It is about page");
    } else if (req.url == "/contact") {
        res.end("It is contact page");
    } else {
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>404 Error</h1>");
    }

});

// to create a listening server
server.listen(8000, () => {
    console.log("Starting...");
});