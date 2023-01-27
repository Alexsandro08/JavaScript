const marcas = /Marca: (|Nike|Adidas|Pumas)/

console.log(marcas.test("Marca: Nike"))
console.log(marcas.test("Supreme"))
console.log(marcas.test("Marca: Pumas"))
console.log(marcas.test("Umbro"))
console.log(marcas.test("Marca: Adidas"))