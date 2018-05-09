var url = 'http://localhost:3000'

document.addEventListener('DOMContentLoaded',()=>{
    //get all cars
    getAllCar()


    //post cars
    //get all cars again

})

const getAllCar = ()=>{
    document.getElementById('carList').innerHTML = ''
    fetch(`${url}cars`, { headers: {'content-type': 'application/json'}}).then(res=>{return res.json()})
    .then(myJson=>{
        const cars = myJson.forEach((e)=>{
            let child = document.createElement('li')
            const carList = document.getElementById('carList')
            child.innerHTML = `${e.make},  ${e.model} <button id='${e._id}'> Delete</button>`
            carList.appendChild(child)
        })
    })
    .catch(err=>{ console.log(err, "Cannot Get")})
}