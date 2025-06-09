"use strict";
const express = require("express");
const app = express();
const port = 8000; // You can choose any port you prefer

// Endpoint to calculate the area and perimeter of a rectangle
app.get("/math/rectangle/:width/:height", (req, res) => {
  // Extract width and height from the URL parameters
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  // Check if width and height are valid numbers
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    res.status(400).json({ error: "Invalid width or height. They should be positive numbers." });
    return;
  }

  // Calculate area and perimeter
  const area = width * height;
  const perimeter = 2 * (width + height);

  // Respond with the area and perimeter in JSON format
  res.json({
    area: area,
    perimeter: perimeter
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
