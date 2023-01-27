let elemento = document.querySelector('#principal')


console.log('altura: ' + elemento.offsetWidth) //Considera as bordas
console.log('altura: ' + elemento.offsetHeight)

console.log('altura: ' + elemento.clientWidth) //Não considera as bordas
console.log('altura: ' + elemento.clientHeight)