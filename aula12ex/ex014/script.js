function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagem/manha.png'
        document.body.style.background = '#f3bc46'
    } else if (hora >= 12  && hora < 18){
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#ba7459'
    }else {
        img.src = 'imagem/noite.png'
        document.body.style.background = '#515154'
    }

}
