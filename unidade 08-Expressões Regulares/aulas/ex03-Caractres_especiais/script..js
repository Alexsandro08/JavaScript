const dRegex = /\d/ // [0-9]

console.log('d')
console.log(dRegex.test('1234'))
console.log(dRegex.test(" "))
console.log(dRegex.test("aaasd"))
console.log(dRegex.test("12234aasd"))

const dRegex2 = /\D/ //[^0-9] negativo

console.log('D')
console.log(dRegex2.test('1234'))
console.log(dRegex2.test(" "))
console.log(dRegex2.test("aaasd"))
console.log(dRegex2.test("12234aasd"))

const pontoRegex = /./

console.log('.')
console.log(pontoRegex.test('1234'))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("aaasd"))
console.log(pontoRegex.test("12234aasd"))

const sRegex = /\s/

console.log('s')
console.log(sRegex.test('1234'))
console.log(sRegex.test(" "))
console.log(sRegex.test("aaasd"))
console.log(sRegex.test("12234aasd"))

const sRegex2 = /\S/

console.log('S')
console.log(sRegex2.test('1234'))
console.log(sRegex2.test(" "))
console.log(sRegex2.test("aaasd"))
console.log(sRegex2.test("12234aasd"))


const wRegex = /\w/

console.log('w')
console.log(wRegex.test('1234'))
console.log(wRegex.test(" "))
console.log(wRegex.test("aaasd"))
console.log(wRegex.test("12234aasd"))

const wRegex2 = /\W/

console.log('w')
console.log(wRegex2.test('1234'))
console.log(wRegex2.test(" "))
console.log(wRegex2.test("aaasd"))
console.log(wRegex2.test("12234aasd"))






