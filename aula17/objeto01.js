let amigo = {nome:'Rodrigo',
sexo:'M',
peso:80,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)