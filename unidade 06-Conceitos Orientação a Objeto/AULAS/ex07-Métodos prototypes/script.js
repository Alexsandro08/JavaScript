function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    return "AUauu"
}

Cachorro.prototype.latir = function(){
    return "AU au"

}


let dog = new Cachorro('Husky', 4, 'cinza')

console.log(dog)

console.log(dog.uivar())
console.log(dog.latir())