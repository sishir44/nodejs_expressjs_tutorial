// CRUD operations using fs module:
// create, read, update, delete

// import module
const fs = require('fs');

// create a new directory
fs.mkdirSync('sishir');

// create a file and insert a text on it
fs.writeFileSync('sishir/bio.txt', 'my name is sishir!');

// add a more data to the file
fs.appendFileSync('sishir/bio.txt', 'please add a new text here');

// read data without getting buffer data
const data = fs.readFileSync('sishir/bio.txt', 'utf-8'); // utf-8 is used to convert binary to string format
console.log(data);

// rename file bio.txt to mybio.txt
fs.renameSync('sishir/bio.txt', 'sishir/mybio.txt');

// delete file mybio.txt
fs.unlinkSync('sishir/bio.txt');

// delete directory sishir
fs.rmdirSync('sishir');