let valores = [8, 1, 43 , 6 , 7 , 9 , 3]
console.log(valores)
/*for( let pos = 0 ; pos < valores.length; pos++)

console.log(`A Posição ${pos} tem valor ${valores[pos]}`)*/

for(let pos in valores){
    console.log(`A Posição ${pos} tem valor ${valores[pos]}`)
}


