// const http = require('http');
 // Default to 3000 if PORT is not set

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to HTTP server");
// });

// server.listen(Port, () => {
//     console.log(`Server successfully running on port: ${Port}`);
// });
 
// express package create webserver


const express = require('express'); 
require("dotenv").config();

const Port = process.env.PORT || 3000;

const app = express(); 

// middleware

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world in express server") 
})
app.get('/hello',(req,res)=>{
    res.send("hello world in express server in hello file") 
})
app.get('/about',(req,res)=>{
    res.send("hello world in express server in hello file dfghjiop") 
})
app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

app.listen(Port,()=>{
    console.log("hello my server is online :"+ Port)
})