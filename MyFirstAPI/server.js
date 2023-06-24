const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middleware => app.use()
app.use(bodyParser.json());

const users = [
  {
    name: "John",
    Age: 45,
    Movies: ["Pathan", "Dhoom"],
  },
  {
    name: "SRK",
    Age: 54,
    Movies: ["Pathan", "Raw One"],
  },
  {
    name: "Deepika",
    Age: 38,
    Movies: ["Pathan", "Race"],
  },
];

console.log(users);
//first API

app.get("/", (req, res) => {
  res.send({ message: "Hello World. This is my First API" });
});

//second API
app.get("/first", (req, res) => {
  res.send({ first: "Welcome to Home Page" });
});

//third API

app.get("/second", (req, res) => {
  res.send({ Second: "Welcome to second page" });
});

//fourth API

app.get("/third", (req, res) => {
  res.send({ result: users });
});

/**
 * till now i have made 4 get API's
 * /users => returns us an array of users
 *
 * Task => create an post API which will add objects to userts Array
 *
 * using post API we can add something or data on Backend
 */

app.post("/add", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send({ message: "your Data is added" });
});

app.listen(4000, () => {
  console.log("server is listening on port 3000");
});
