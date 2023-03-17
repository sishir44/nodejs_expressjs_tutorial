//import file system module
const fs = require('fs');

// create a new directory
fs.mkdir('sishir', (err) => {
    console.log(err);
    console.log('create a directory');
});

// create a file and insert a text on it
fs.writeFile('sishir/bio.txt', 'my name is sishir!', (err) => {
    console.log(err);
    console.log('create a file');
});

// add a more data to the file
fs.appendFile('sishir/bio.txt', '\n please support me !', (err) => {
    console.log(err);
    console.log('adding a new text');
});


// read data without getting buffer data
fs.readFile('sishir/bio.txt', 'utf-8', (err, data) => { // utf-8 is used to convert binary to string format
    console.log(data);
    console.log("reading completed");
    console.log(err);
});

// rename file bio.txt to mybio.txt
fs.rename('sishir/bio.txt', 'sishir/mybio.txt', (err) => {
    console.log(err);
    console.log("renamed changed");
});

// delete file mybio.txt
fs.unlink('sishir/bio.txt', (err) => {
    console.log(err);
    console.log("deleted txt file");
});

// delete directory sishir
fs.rmdir('sishir/bio.txt', (err) => {
    console.log(err);
    console.log("deleted directory");
});