function multiplicar(){
    var n = window.document.querySelector('input#num').value
    var c = 1
    var p1 = window.document.querySelector('p#res')

    if (n == ''){
        window.alert('Por favor digite algum número!')
    }
    else {
    while (c <= 10){
        p1.innerText += `${n} x ${c} = ${n*c}\n`
        c += 1
        }
    }
}

/* os resultados estão se acumulando, preciso zerar o html toda vez que clico no botão */