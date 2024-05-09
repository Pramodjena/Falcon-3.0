const http = require("http");
const fs = require("fs");
const math = require("./data");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/write") {
    fs.writeFileSync("text.txt", "Hey This is Pramod \n");
    res.end("File created sucessfully");
  } else if (req.url === "/read") {
    const readText = fs.readFileSync("./text.txt", "utf-8");
    res.end(readText);
  } else if (req.url === "/append") {
    fs.appendFileSync("./text.txt", "Hey welcome to web bocket \n");
    const readText = fs.readFileSync("./text.txt", "utf-8");
    res.end(readText);
  } else if (req.url === "/math") {
    const sum = math.sum(75, 25);
    const subtract = math.subtract(55, 25);
    const multiplication = math.multiplication(15, 25);
    const division = math.division(75, 15);
    const result = `The sum value is: ${sum}, the subtract value is:${subtract}, the multiplication value is:${multiplication}, The division value is: ${division}`;
    fs.appendFileSync("./text.txt", result.toString() + "\n");
    const readText = fs.readFileSync("./text.txt", "utf-8");
    res.end(readText);
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
