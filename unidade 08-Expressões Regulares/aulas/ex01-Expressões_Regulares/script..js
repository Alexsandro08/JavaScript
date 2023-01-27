const reg01 = /bola/
let teste = 'Fui na feira e comprei uma bola'

console.log(reg01.test('Tem bola?'))
console.log(reg01.test('Não tem!'))
console.log(reg01.test(teste))