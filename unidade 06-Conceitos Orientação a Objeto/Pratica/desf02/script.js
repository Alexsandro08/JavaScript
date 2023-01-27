class Carrinho {
    constructor(itens, qtd, valor_total){
        this.itens = itens
        this.qtd = qtd
        this.valor_total = valor_total
 }
    addItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd
            }
        }
        this.qtd += item.qtd
        this.valor_total += item.preco * item.qtd
    }
}

let carrinho = new Carrinho([
    {
        id:01,
        nome:'PC',
        qtd:3,
        preco: 1500
    },
    {
        id:02,
        nome:'TV',
        qtd: 5,
        preco: 1000
    },
    {
        id:03,
        nome:'controle',
        qtd: 20,
        preco: 250
    }
], 3, 2850)

console.log(carrinho)

carrinho.addItem({id:01,nome:'PC',qtd:5,preco:1500})
console.log(carrinho)

