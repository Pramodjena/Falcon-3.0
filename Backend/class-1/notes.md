## How to create a server:

- `npm init -y`
- create a `index.js` file

- import the http module

  `const http = require("http");`

- create a server using `const server = http.createServer()`
- to run the server `server.listen(4000()=>{})`

- install nodemon `npm i nodemon`
- add the code in the script tag in `package.json`

- `"start": "nodemon index.js"`

- run the server using `npm start`

## How to run the backend project using the following script

1. `"dev": "node index.js"`,
2. `"start": "nodemon index.js"`

3. npm run dev
4. npm run start (nodemon)
