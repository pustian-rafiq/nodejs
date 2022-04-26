const http = require('http');
const express = require('express');
const app = express()

//Import routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


const bodyParser = require('body-parser');


// One middleware allows the request to continue the nest middleware line
// So execute sequentially

app.use(bodyParser.urlencoded({extended: false}))


//Declare the routers

app.use(adminRoutes)
app.use(shopRoutes)


//const  server = http.createServer(app)
port = 5000
app.listen(5000,()=> {
    console.log(`Server is running on port ${port}`)
})