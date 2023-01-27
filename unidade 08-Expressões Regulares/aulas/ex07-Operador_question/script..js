let opcional = /prova\s?\d?/

console.log(opcional.test("prova"))
console.log(opcional.test("prova 1"))
console.log(opcional.test("prova 2"))

let opcional2 = /\d+\w?/

console.log(opcional2.test("1234556a"))
console.log(opcional2.test("12345 "))
console.log(opcional2.test("12345678"))

