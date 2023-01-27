const cachorro = {
    patas: 4,
    raca:'Srd',
    latir:function(){
        console.log("Au,au,au")
    }
}

let pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'Pastor Alemão'

console.log(pastorAlemao)