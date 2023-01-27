const nome =  /^(?=.{3,16}$)[a-z0-9- _]/

console.log(nome.test("alex_123"))
console.log(nome.test("23"))
console.log(nome.test("ah"))
