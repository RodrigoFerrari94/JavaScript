function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por Favor, digite um número válido!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let iten = document.createElement('option')
            iten.text = `${n} x ${c} = ${n*c}`
            iten.value = `tab${c}`
            tab.appendChild(iten)
        }

    }


}