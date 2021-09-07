const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`performance example ${process.pid}`); //this is to get the ID of the current process of the operating system
});

delay = (duration) => {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
};

app.get("/timer", (req, res) => {
  //delay the response
  delay(4000);
  res.send(`Beep beep beep! ${process.pid}`);
});

console.log("Running server.js...");
console.log("worker process started");
app.listen(3000);
