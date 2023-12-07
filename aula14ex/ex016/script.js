    function contar() {
var start = window.document.getElementById('txtini')

var end = window.document.getElementById('txtfim')

var pass = window.document.getElementById('txtpas')

var res = window.document.getElementById('res')




    if (start.value.length == 0 || end.value.length == 0 || pass.value.length ==0) { 
        res.innerHTML = 'Impossível contar!'

    } else {
        res.innerHTML = 'Contando: <br>'

        var s1 = Number(start.value)
        var e1 = Number(end.value)
        var p1 = Number(pass.value)
        if(p1 <= 0){
            alert('Passo Inválido! Considerando passo 1')
            p1 = 1

        }
        if(s1 < e1) {
            for (var c = s1; c <= e1; c += p1) {
            res.innerHTML += `${c} \u{1F449}`
        }
        
        } else{
            for( var c = s1; c >= e1; c -= p1) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}