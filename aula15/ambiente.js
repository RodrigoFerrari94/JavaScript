let num = [2,7,0,8,9]
num.push(1)
num.sort()
console.log(`${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O terceiro valor do vetor é ${num[2]}`)
let pos = num.indexOf(7)
if(pos == -1){
    console.log('Esse valor não foi encontrado')
}else{
    console.log(`O valor 3 está na posição ${pos}`)
}

