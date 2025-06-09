"use strict";
const express = require("express");
const app = express();

app.get("/math/circle/:r", (req, res) => {
  const radius = parseFloat(req.params.r);

  // Check if the radius is a valid number
  if (isNaN(radius) || radius <= 0) {
    res
      .status(400)
      .json({ error: "Invalid radius. It should be a positive number." });
    return;
  }
  // Calculate area and circumference
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;

  // Respond with the area and circumference in JSON format
  res.json({
    area: parseFloat(area.toFixed(2)), // Rounded to 2 decimal places
    circumference: parseFloat(circumference.toFixed(2)), // Rounded to 2 decimal places
  });
});
const port = 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
