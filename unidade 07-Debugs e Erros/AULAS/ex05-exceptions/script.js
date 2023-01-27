function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error('Digite apenas string')
    }else{
        return `Olá ${nome}`
    }

}

console.log(saudacao('Alex'))
console.log(saudacao(5))