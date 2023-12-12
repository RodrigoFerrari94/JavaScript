
let gallery = document.getElementById('galeria')
let fotos = document.getElementById('fotos')
let currentIndex = 0;

gallery.addEventListener('click', clicar)
gallery.addEventListener('mouseenter', entrar)
gallery.addEventListener('mouseout', sair)
gallery.addEventListener('wheel', rolar)



function clicar(){
    window.location.href = 'fotos.html';
}

function entrar() {
    gallery.style.transform = 'scale(1.25)';

}
function sair() {
    gallery.style.transform = 'scale(1.0)';

}









