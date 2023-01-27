const podeDirigir = function(idade, cnh){
    if (idade >= 18 || cnh == true) {
    return "Pode Dirigir"
}   else {
    return "Não pode dirigir"
}
}
console.log(podeDirigir(18,true));
console.log(podeDirigir(17,0));
console.log(podeDirigir(18,0));
console.log(podeDirigir(16,true));
