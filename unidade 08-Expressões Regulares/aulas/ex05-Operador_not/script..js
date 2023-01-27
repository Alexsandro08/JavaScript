const notAB = /[^AabB]/

console.log(notAB.test('A'))
console.log(notAB.test('B'))
console.log(notAB.test('bola'))

const notAZ = /[^a-z]/

console.log(notAZ.test('aaassdd'))
console.log(notAZ.test('alexsandro'))
