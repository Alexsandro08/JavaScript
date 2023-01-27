const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(10)

    },2000)
})
const p2 = Promise.resolve(210)


const p3 = new Promise((resolve, reject)=>{
    resolve(0)
})

Promise.all([p1,p2,p3]).then((values)=> console.log(values))