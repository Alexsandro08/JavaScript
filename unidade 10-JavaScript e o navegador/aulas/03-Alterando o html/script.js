let novo_elemento = document.createElement("p");
let texto = document.createTextNode("algum texto");


novo_elemento.appendChild(texto)

let head = document.querySelector("#principal");
let paihead = head.parentNode;

paihead.replaceChild(novo_elemento,head)