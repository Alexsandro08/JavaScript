function* criarId(){
    let id = 0
    while(true){
        yield id++
    }
}

let criaId = criarId()

console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)