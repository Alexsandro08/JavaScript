class banco{
    constructor(saldo){
      this.saldo = saldo   
    }
    deposito(valor){
        this.saldo += valor

    }

    saque(valor){
        this.saldo -= valor
    }
    
}

let conta = new banco(2000)

conta.deposito(1000)

console.log(conta.saldo)

conta.saque(1000)

console.log(conta.saldo)



