const fs = require('fs');

const bioData = {
    name: 'sishir',
    age: 23,
    channel: "sishir techy",
};

//convert it into json
const jsonData = JSON.stringify(bioData);

//add that file to another file
fs.writeFile("json1.json", jsonData, (err) => {
    console.log(jsonData);
});

//readfile
fs.readFile("json1.json", "utf-8", (err, data) => {
    //convert json to orginal
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);

});