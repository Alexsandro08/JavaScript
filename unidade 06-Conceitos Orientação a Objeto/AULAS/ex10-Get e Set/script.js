class Cachorro {
    constructor(raca,cor){
      this.cor = cor
      this.raca = raca  
    }
    get verRaca(){
        return 'A raca é ' + this.raca
    }
    set novaRaca(raca){
      this.raca = raca  
    }
    get verCor(){
        return 'A cor é ' + this.cor
    }
    set novaCor(cor){
        this.cor = cor
    }
        
}

let dog = new Cachorro('Golden', 'Caramelo')
console.log(dog.verRaca)
dog.novaRaca = 'Pastor Alemão'
console.log(dog.verRaca)
console.log('-----------------------------------')
console.log(dog.verCor)
dog.novaCor = 'Preto e amarelo'
console.log(dog.verCor)