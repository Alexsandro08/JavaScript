const validar_ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validar_ip.test("127.0.0.1"))
console.log(validar_ip.test("129.188.0.0"))
console.log(validar_ip.test("8.8.8.8"))

console.log(validar_ip.test("123.567.0"))
console.log(validar_ip.test("aaaaddaffa"))
console.log(validar_ip.test("12335678"))
console.log(validar_ip.test("1123456.45467.68689"))