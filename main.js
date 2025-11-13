const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.sendDate("Hello, world!")
  // TODO: Send the ""Hello, world!"" response
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
  // TODO: Log a message to the console when the server starts listening on the port
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
