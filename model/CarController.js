const carType = require('./model.js')

module.exports = {
    addCar: (req,res)=>{
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

    },

    deleteCar: (req,res)=>{
        console.log("HIT DELETE CAR")
        carType.findOneAndRemove({ '_id':req.params._id}, (err, deletedItem)=>{
            console.log("SHOW ME ID ",req.params.value)
            if(err){
                res.status(500).json()
                console.log(err, 'deleteerr')
            } else {
                res.send({Success:deletedItem})
            }
        })

    }

}