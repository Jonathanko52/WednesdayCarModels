const mongoose = require('mongoose')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const CarController = require('./model/CarController')
const myUri = 'mongodb://JKJAKE:crudapp@ds019826.mlab.com:19826/crudapplication'




mongoose.connect(myUri,()=>{
    console.log('connected to db')
})

// app.use(express.static('/'+'.js'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.post("/cars", CarController.addCar)

app.get('/cars', CarController.getCar)

app.get('/index.js',(req,res)=>{
    console.log('INDEX.JS ROUTE')
    console.log(req.body)
    console.log(res.body)
    res.sendFile(__dirname + '/index.js')
})

app.delete('/cars/:_id', CarController.deleteCar)

app.listen(3000, ()=>{
    console.log('Connected to car server')
})