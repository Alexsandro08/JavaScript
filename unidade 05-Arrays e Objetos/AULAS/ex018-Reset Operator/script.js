let num =  10;
let num01 = 30;
let num02 = 80;
let num03 = 50;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length;i++){
        console.log(args[i]) 
    }
   
}

imprimirNumeros(num,num01,num02,num03)
imprimirNumeros('pausa')
imprimirNumeros(20,80,50)
imprimirNumeros('pause')
imprimirNumeros(num,num03)