const http = require("http");
const fs = require("fs");
const math = require("./data");

const server = http.createServer((req, res) => {
  if (req.url === "/write") {
    fs.writeFileSync("text.txt", "Hey This is Pramod");
    res.end("File created sucessfully");
  } else if (req.url === "/read") {
    const readText = fs.readFileSync("./text.txt", "utf-8");
    res.end(readText);
  } else if (req.url === "/append") {
    fs.appendFileSync("./text.txt", "\n Hey welcome to web bocket \n");
    const readText = fs.readFileSync("./text.txt", "utf-8");
    res.end(readText);
  } else if (req.url === "/math") {
    const sum = math.sum(100, 25);
    const subtract = math.subtract(100, 25);
    const result = `The sum value is: ${sum} and the subtract value is:${subtract}`;
    fs.appendFileSync("./text.txt", result.toString() + "\n");
    const readText = fs.readFileSync("./text.txt", "utf-8");
    res.end(readText);
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
