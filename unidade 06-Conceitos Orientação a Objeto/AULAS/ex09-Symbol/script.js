class Cachorro{
    constructor(raca){
       this.raca = raca

    }
}

let patas = Symbol()

Cachorro.prototype[patas] = 4

let dog = new Cachorro('Golden')



//Acessando o Symbol

console.log(Cachorro.prototype[patas])

console.log(dog[patas])
