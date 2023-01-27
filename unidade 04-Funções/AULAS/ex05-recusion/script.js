let pessoa ={
    nome:"Alex",
    idade:20,
    profissão:"Programador",
    telefone:8888888888,
    ola: function(){
        return "Olá Mundo!"

    }
}

console.log("Nome: " + pessoa.nome)
console.log("Idade: " + pessoa.idade)
console.log("Profissão: " + pessoa.profissão)
console.log("Telefone: " + pessoa.telefone)
console.log("------------------")
console.log(pessoa.ola())
