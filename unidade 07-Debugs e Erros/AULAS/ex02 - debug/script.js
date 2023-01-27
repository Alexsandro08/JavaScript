a = 1;
b = 3;
c = 4;

if(a > c){
    a = b;
    console.log(a)

}

for(let i = 5; i < 0; i--){
    b++;
    a = a + c + 1
    c+=2;
    console.log(a)

}

if(c == b){
    b++


} else{
    c = c + b + a
}

console.log(a)

a = a * b
console.log(a)