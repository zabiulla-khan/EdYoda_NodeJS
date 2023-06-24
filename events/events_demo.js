const events = require("events");

const myEvents = new events();

//on() will help you in consuming events

// on() , consume events ===> listen for events

myEvents.on("morning", (data) => {
  console.log(data);
});

myEvents.on("afternoon", (data) => {
  console.log(data);
});

// emit() will help you in creating events

// emit events ===> create events

myEvents.emit("morning", "Good morning guys");

myEvents.emit("afternoon", "Good afternoon guys");
