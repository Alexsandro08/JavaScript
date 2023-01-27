const car ={
    "marca":"audi",
    "portas": 4,
    "cambio":"auto",
    "motor":1.6,
    "tipo":"sedan"

}

let jsonString = JSON.stringify(car)

console.log(jsonString)

let stringTojason = JSON.parse(jsonString)

console.log(stringTojason)