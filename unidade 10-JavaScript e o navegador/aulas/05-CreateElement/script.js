let lista = document.createElement('ul')

for(let i = 0; i < 5; i++){
    let item = document.createElement('li')
    let lista02 = document.createTextNode('Listas teste ' + i)


    item.appendChild(lista02)
    lista.appendChild(item)

}


let cont = document.getElementById('semiprincipal')

cont.appendChild(lista)