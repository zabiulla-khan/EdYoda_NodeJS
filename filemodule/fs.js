const fs = require("fs"); // fs module helps you to do some file operations like read , write , append ...

//Reading

// console.log("Starting ...");

// Asynchronous

// fs.readFile("notes.txt", function (err, data) {
//   console.log(data.toString());
// });

// Synchronous
// const data = fs.readFileSync("notes.txt");

// console.log(data.toString());

// console.log("Ending ...");

//writing
// by this the previous one get deleted and so the solution is appending

// fs.writeFile("notes.txt", "We are Adding Some thing to File", function (err) {
//   fs.readFile("notes.txt", function (err, data) {
//     console.log(data.toString());
//   });
// });

// Appending

fs.appendFile("notes.txt", "\nAm now Appending", function (err) {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("notes.txt", function (err, data) {
      console.log(data.toString());
    });
  }
});
