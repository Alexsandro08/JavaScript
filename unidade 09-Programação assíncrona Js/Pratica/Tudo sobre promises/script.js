const promessa = new Promise((resolve, reject)=> {

    let nome = 'Alex'

    if(nome == 'Alex'){
        resolve('Usuário Alex encontrado')
    } else {
        reject('Usuário não encontrado')
    }

})

promessa.then((data)=>{
    console.log(data)
})

// encadeamento de then´s
const promessa2 = new Promise((resolve, reject)=> {

    let nome = 'Alex'

    if(nome == 'Alex'){
        resolve('Usuário Alex encontrado')
    } else {
        reject('Usuário não encontrado')
    }

})

promessa2.then((data)=>{
    return data.toLowerCase()
}).then((stringmodificada)=>{
    console.log(stringmodificada)
})
const promessa3 = new Promise((resolve, reject)=> {

    let nome = 'Alex'

    if(nome == 'Alex'){
        resolve('Usuário Alex encontrado')
    } else {
        reject('Usuário não encontrado')
    }

})
promessa3.then((data)=>{
    return data.toUpperCase()
}).then((stringmodificada)=>{
    console.log(stringmodificada)
})

//Retorno do catch
const promessa4 = new Promise((resolve, reject)=> {

    let nome = 'Jonh'

    if(nome == 'Alex'){
        resolve('Usuário Jonh encontrado')
    } else {
        reject('Usuário Jonh não encontrado')
    }

})
promessa4.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log('Aconteceu um erro: ' + err)
})

// Resolver várias promises com all

const p1 = new Promise((resolve,reject)=>{
    resolve('p1 ok')
})
const p2 = new Promise((resolve,reject)=>{
    resolve('p2 ok')
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p3 ok')
    },2000)
        
    }
)

const ResAll = Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data)
})

// Resolver várias promises com race
const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p4 ok')
    }, 2000)
})
const p5 = new Promise((resolve,reject)=>{
    resolve('p5 ok')
})
const p6 = new Promise((resolve,reject)=>{

        resolve('p6 ok')
 
        
    }
)
const Resrace =  Promise.race([p4,p5,p6]).then((data)=>{
    console.log(data)
})