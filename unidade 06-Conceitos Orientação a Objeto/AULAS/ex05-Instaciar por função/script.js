function criaCachorro(raca,patas,cor){
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let resultado = criaCachorro('PitBull',4,'preto')

console.log(resultado)