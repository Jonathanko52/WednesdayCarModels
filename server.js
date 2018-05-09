const mongoose = require('mongoose')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const CarController = require('./model/CarController')
const myUri = 'mongodb://JKJAKE:crudapp@ds019826.mlab.com:19826/crudapplication'

mongoose.connect(myUri,()=>{
    console.log('connected to db')
})

app.use(express.static('/'+'.js'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.post("/cars", CarController.addCar)

app.get('/cars', CarController.getCar)

app.listen(3000, ()=>{
    console.log('Connected to car server')
})