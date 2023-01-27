function checharNumero(valor){
    let resultado = Number(valor)
    if(Number.isNaN(resultado)){
        alert('Digite só números')
        return prompt('Digite um numero')
      

    } else{
        return resultado;
    }
}

let teste = prompt('Digite um numero')

checharNumero(teste)