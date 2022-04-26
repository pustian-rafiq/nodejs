const http = require('http');
const express = require('express');

const app = express()
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');


// One middleware allows the request to continue the nest middleware line
// So execute sequentially

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req,res,next)=> {
    res.send("<form action='/product' method='POST'><input type='text' name='title' > <button type='submit'>Submit</button></form>")
})
app.use('/product',(req,res,next)=> {
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=> {
    res.send("This is power of express js")
})
//const  server = http.createServer(app)
port = 5000
app.listen(5000,()=> {
    console.log(`Server is running on port ${port}`)
})