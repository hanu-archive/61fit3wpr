"use strict";
const express = require("express");
const app = express();

// Handle GET requests to /hello with a query parameter 'name'
app.get("/hello", (req, res) => {
  const name = req.query.name;
  if (name) {
    res.type("text/html");
    res.send(`<h1>Hello ${name}</h1>`);
  } else {
    res.status(400).send("<h1>Name query parameter is missing</h1>");
  }
});
// Start the server on port 8000
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
