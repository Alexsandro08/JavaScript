let validarDomios = /\[?www.] \w+\.com.br|com/

console.log(validarDomios.test("www.google.com"))
console.log(validarDomios.test("google.com"))
console.log(validarDomios.test("www.google.com.br"))
console.log(validarDomios.test("google.com.br"))
console.log(validarDomios.test("www.google"))
