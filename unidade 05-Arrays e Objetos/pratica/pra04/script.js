const onibus = {
    rodas:  4,
    limite_de_passageiros: 40,
    portas: 2

}

console.log("RODAS: " + onibus.rodas)
console.log("LIMITE DE PASSAGEIROS: " + onibus.limite_de_passageiros)
console.log("PORTAS: " + onibus.portas)

delete onibus.portas

onibus.janelas = 20

console.log(onibus)