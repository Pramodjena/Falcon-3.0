// Import required file:
const http = require("http");
const os = require("os");

// console.log(http);

// Create a server:
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from the home side");
  } else if (req.url === "/about") {
    res.end("Hello from the about side");
  } else if (req.url === "/name") {
    res.end("Hello my name is Pramod");
  } else {
    res.end("404 not found");
  }
});

//Run the server:
server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
