const add = (a,b)=> { // func defination (parameters)
    return a+b;
};

const sub = (a,b)=> {
    return a-b;
};

const mul = (a,b)=> {
    return a*b;
};

const name = "sishir";

/* Object Destructuring */
module.exports = {add, sub, mul, name};


// for multiple function definitions
//module.exports.add = add;
//module.exports.sub = sub;

// for single function definitions
//module.exports = name;



