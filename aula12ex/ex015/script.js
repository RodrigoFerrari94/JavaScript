function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','imagem/bebe-homem.png')
            } else if( idade < 29){
                img.setAttribute('src','imagem/jovem-homem.png')
            } else if(idade < 50) {
                img.setAttribute('src','imagem/homem-adulto.png')
            } else {
                img.setAttribute('src','imagem/homem-velho.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','imagem/bebe-mulher.png')
            } else if( idade < 29){
                img.setAttribute('src','imagem/jovem-mulher.png')
            } else if(idade < 50) {
                img.setAttribute('src','imagem/mulher-adulta.png')
            } else {
                img.setAttribute('src','imagem/mulher-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}