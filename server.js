const http = require('http');
require("dotenv").config();

const Port = process.env.PORT || 3000; // Default to 3000 if PORT is not set

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to HTTP server");
});

server.listen(Port, () => {
    console.log(`Server successfully running on port: ${Port}`);
});
 