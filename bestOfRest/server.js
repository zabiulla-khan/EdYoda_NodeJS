const express = require("express");

const bodyParser = require("body-parser"); // middleware

const app = express();
app.use(bodyParser.json());

//creating our own middleware  (1st middleware)
function middle1(req, res, next) {
  console.log("middle1 is called");
  //   let name = req.body.name;
  //   console.log(name);
  //   if (name == "zabi") {
  //     res.json({ message: "you are not allowed" });
  //   }
  next();
}

// 2md middleware
function middle2(req, res, next) {
  console.log("middle2 is called");
  next();
}

// using own created middleware
// app.use(middle1);  // this is bad practice . it will be used for all API's. line no 33 is recommended
// app.use(middle2);  // this is bad practice

// If we use any middleware , then our middleware will be called first before API call

//1st API

app.post("/dashboard", middle1, middle2, (req, res) => {
  //   res.send({ message: "this is api call" }); //=> bad practice
  console.log("line no 21 is called");
  // 1st best practice
  res.json({ message: "this API is in JSON format" });
});

//2nd API

app.get("/canteen", (req, res) => {
  res.json({ mesaage: "This is canteen area" });
});

//server listening 3000 port (or) creating server
app.listen(3000, () => {
  console.log("Server is listening om 3000 port");
});
