const http = require('http');
const express = require('express');

const app = express()

// One middleware allows the request to continue the nest middleware line
// So execute sequentially
app.use((req,res,next)=> {
    console.log("First middleware")
    next()
})
app.use((req,res,next)=> {
    console.log("Second middleware")
})


const  server = http.createServer(app)
server.listen(3000,()=> {
    console.log("Server is running on port 3000")
})