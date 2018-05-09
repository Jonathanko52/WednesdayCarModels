var url = 'http://localhost:3000/'

document.addEventListener('DOMContentLoaded',()=>{
    //get all cars
    console.log('domloaded')
    getAllCar()
    document.querySelector('body').addEventListener('click',deleteCar)


    //post cars
    //get all cars again

})

const getAllCar = ()=>{
    console.log('ingetallcars')
    document.getElementById('carList').innerHTML = ''
    fetch(`${url}cars`, { headers: {'content-type': 'application/json'}}).then(res=>{return res.json()})
    .then(myJson=>{
        const cars = myJson.forEach((e)=>{
            let child = document.createElement('li')
            const carList = document.getElementById('carList')
            console.log('FOREACHISRUNNING')
            child.innerHTML = `${e.make},  ${e.model} <button id='${e._id}' class='delete'> Delete</button>`
            carList.appendChild(child)
        })
    })
    .catch(err=>{ console.log(err, "Cannot Get")})
}

const deleteCar = (e)=>{
     console.log(e.target.classList[0] === 'delete')
    if(e.target.classList[0] === 'delete'){
        console.log('ID IN DELETE CAR', e.target.id)
        const option = {
            method:'DELETE',
            headers: {'content-type': 'application/json'}
        }
        fetch(`${url}cars/${e.target.id}`, option)
            .then(res=>{return res.json()})
            .then(myJson=>{
                getAllCar()
            })
            .catch(err=>{ console.log(err, "Cannot Get")})
    }

}