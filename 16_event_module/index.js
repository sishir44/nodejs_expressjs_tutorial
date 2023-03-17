// import events module
const EventEmitter = require("events"); // create a class
const event = new EventEmitter(); // create an object for a class

// Example 1- Registering for the event to be fired only one time using once.
event.on('sayMyName', () => {
    console.log("My name is ccr");
});

// Example 2 - Create an event emitter instance and register a couple of callbacks
event.on('sayMyName', () => {
    console.log("My name is sishir");
});
event.on('sayMyName', () => {
    console.log("My name is sishir bohara");
});

// emit is used to create our events
event.emit("sayMyName"); // create a event

// Example 3– Registering for the event with callback parameters
event.on("checkPage", (sc, msg) => { 
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkPage", 200, "ok");