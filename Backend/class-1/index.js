// Import required file:
const http = require("http");

// console.log(http);

// Create a server:
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from the home side");
  } else if (req.url === "/about") {
    res.end("Hello from the about side");
  }
});

//Run the server:
server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
