let frutas = /\d+ (Bananas|Maçãs|Uvas)/

console.log(frutas.test("10 Bananas"))
console.log(frutas.test("8 Maçãs"))
console.log(frutas.test("5 Peras"))
