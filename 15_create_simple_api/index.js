const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const data = fs.readFileSync('userapi.json', "utf-8");
    const objData = JSON.parse(data);
 
    // console.log(req.url);
    if (req.url == "/") {
        res.end("Hello from the home sides ok !");
    } else if (req.url == "/about") {
        res.end("Hello from the About US sides");
    } else if (req.url == "/contact") {
        res.end("Hello from the contact US sides");
    } else if (req.url == "/userapi") {
        res.writeHead (200, { "Content-type": "application/json" });
        res.end(objData[0].name); 
        // fs.readFileSync('userapi.json', "utf-8", (err, data) => {
        //     const objData = JSON.parse(data);
        //     console.log(objData);
        // });
    } else {
        res.writeHead (404, { "Content-type": "text/html" });
        res.end("<h1> 404 error pages. Page doesn't exist </h1>");
    }
});

server.listen (8000, "127.0.0.1", () => {
console.log("listening to the port no 8000");
});