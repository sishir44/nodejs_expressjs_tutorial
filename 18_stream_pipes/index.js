// stream.pipe(), the method used to take a readable stream and connect it to a writeable stream.
/* Writing and Reading data from a Stream */

const fs = require('fs'); //import file system module
const http = require('http'); //import http module
const server = http.createServer(); //create server instance

server.on('request', (req, res) => {
 // 3rd way
 const rstream = fs.createReadStream("index.txt");
 rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");