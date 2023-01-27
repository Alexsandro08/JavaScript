class Endereco{
    constructor(rua,bairro,cidade,estado){
        this.rua = rua
        this.bairro = bairro 
        this.cidade = cidade
        this.estado = estado
    }
    setNovarua(rua){
        this.rua = rua

    }
   
}

let endereco = new Endereco('Rua manoel bento', 'Centro', 'Santos', 'São Paulo')

console.log(endereco)

endereco.setNovarua = 'RuaNova'
console.log(endereco)