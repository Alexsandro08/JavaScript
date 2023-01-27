class Mamifero {
  constructor(patas){
     this.patas = patas 
  }
  
}

let coyote =  new Mamifero(4)

console.log(coyote.patas)

class Cachorro extends Mamifero{
  constructor(patas,raca, cor){
    super(patas)
    this.raca = raca
    this.cor = cor
} 
  }

let dog = new Cachorro(4,'Husky', 'Cinza')

console.log(dog)


   