const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lynxvi123.",
  database: "library_system",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.use(express.json());

// Get the list of game genres
app.get("/games/genres", (req, res) => {
  const query = "SELECT id, genre_name FROM genres ORDER BY genre_name ASC";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve genres" });
    }
    res.json(results);
  });
});

// Get the list of games by genre and year
app.get("/games/list/:genreid/:year", (req, res) => {
  const { genreid, year } = req.params;
  const query = `
    SELECT id, name, platform, publisher
    FROM games
    WHERE genre_id = ? AND release_year = ?
    LIMIT 10
  `;

  db.query(query, [genreid, year], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve games" });
    }
    res.json(results);
  });
});

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to show the sign-up form
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

// Endpoint to handle the sign-up form submission
app.post("/register", (req, res) => {
  const { username, password, re_password } = req.body;

  if (!username || !password || password !== re_password) {
    return res.send(
      "Validation error: Ensure all fields are filled and passwords match."
    );
  }

  const query =
    "INSERT INTO users (username, password, created_at) VALUES (?, ?, NOW())";
  db.query(query, [username, password], (err, result) => {
    if (err) throw err;
    res.send("User registered successfully!");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
