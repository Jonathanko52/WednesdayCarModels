const carType = require('./model.js')

module.exports = {
    addCar: (req,res)=>{

        console.log("req.body in controller", req.body)
        console.log("Car Mongoose Model", carType)
        carType.create(
            {make: req.body.make,
             model: req.body.model},
            (err, car)=>{
            if(err){
                res.status(500).json('did not create', err)
            } else {
                console.log("THINGY SEND TO DATABASE", car)
                res.redirect('/')
            }
        })
    },

    getCar: (req,res)=>{
        carType.find({},(err,thingy)=>{
            if(err){
                res.status(500).json('did not find', err)
            } else {
                res.send(thingy)
            }
        })

    }


}