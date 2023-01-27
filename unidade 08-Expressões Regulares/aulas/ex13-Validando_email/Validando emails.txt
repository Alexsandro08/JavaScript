let email = /\w+@\w+\.\w+/

console.log(email.test("teste@gmail.com"))
console.log(email.test("email@gmail"))
console.log(email.test("email@gmail.com.br"))
console.log(email.test("email.com"))