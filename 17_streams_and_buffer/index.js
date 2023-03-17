/* Reading data from a Stream */

const fs = require('fs'); //import file system module
const http = require('http'); //import http module
const server = http.createServer(); //create server instance

server.on('request', (req, res) => {

    // 1st Way
    fs.readFile("index.txt", (err, data) => {
        if (err) return console.log(err);
        res.end(data.toString());
    });

    /*-------------------------------*/

    // 2nd Way
    // Create a readable stream
    const rstream = fs.createReadStream("index.txt");

    // Handle stream events: data, end, and error
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    });

    rstream.on('end', () => {
        res.end();
    });

    rstream.on('error', (err) => {
        console.error(err);
        res.end("file not found");
    });
});

server.listen(8000, "127.0.0.1");