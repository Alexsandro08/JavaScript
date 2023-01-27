let cep = /\d{4,5}-\d{4}/

console.log(cep.test("5812-0000"))

//------------------------------------------

let telefone = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(telefone.test("(83)9821-40976"))