let arr = [10,8,7,0,11]
let arr2 = []


function arra(arr){
  if(arr.length == 0){
    throw new Error('O Array precisa de elementos');
  } else{
    for(let i = 0; i < arr.length; i++){
        console.log(i);

    }
  }
}

arra(arr)
arra(arr2)