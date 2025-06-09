const http = require("http");
const url = require("url");

// Create the server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Check if the path is '/hello'
  if (parsedUrl.pathname === "/hello") {
    // Extract the 'name' query parameter
    const name = parsedUrl.query.name;

    // Create the response
    if (name) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>Hello ${name}</h1>`);
    } else {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end("<h1>Name query parameter is missing</h1>");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
