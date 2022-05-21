const http = require('http');
const express = require('express');
const app = express()
const path = require('path')
//Import routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


const bodyParser = require('body-parser');


// One middleware allows the request to continue the nest middleware line
// So execute sequentially

app.use(bodyParser.urlencoded({extended: false}))

//Use static middleware for static file
app.use(express.static(path.join(__dirname,'public')))

//Declare the routers

app.use("/admin",adminRoutes)
app.use(shopRoutes)

//Handle worng routes
// When we don't use any route like '/', it controlls all the request like get abd post
app.use((req,res,next)=> {
    res.status(404).send("<h1>404 Page was not found!!</h1>")
})
//const  server = http.createServer(app)
port = 5000
app.listen(5000,()=> {
    console.log(`Server is running on port ${port}`)
})