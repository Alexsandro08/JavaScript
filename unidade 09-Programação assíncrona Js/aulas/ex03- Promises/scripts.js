let promesa = Promise.resolve(9 + 10)

console.log("Outros codigos")



promesa.then((value) => { console.log(`O valor é ${value}`) }) 