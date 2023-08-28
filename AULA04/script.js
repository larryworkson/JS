 


function clicar() {
    
    // chamadas de input
    var txtinicio = window.document.querySelector('input#inicio')
    var txtfim = window.document.querySelector('input#fim')
    var txtpasso = window.document.querySelector('input#passo')
    // convertendo input em número
    var inicio = txtinicio.value
    var fim = txtfim.value
    var passo = txtpasso.value
    res = window.document.querySelector('p#res')
    resultado = window.document.querySelector('p#resultado')
   

    // validação de input
    if (passo > fim || inicio == '' || fim == '' || fim < inicio) {
        resultado.innerHTML = '' 
        res.innerText = `Impossível calcular!`

    }
    else {
        if (passo == 0) {
            resultado.innerHTML = '' 
            window.alert('Passo não pode ser = 0. Passo recebeu 1')
            passo = 1
                        
        }
        
    }
    if (inicio != '' || fim != '' || passo != ''){
            res.innerText = `Calculando`
            resultado.innerHTML = ''    
        // laços de repetição
            i = Number(inicio)
            f = Number(fim)
            p = Number(passo)
            for (c = i ; c < f ; c += p) {
                resultado.innerHTML += `${c} 👉 `
            }
            resultado.innerHTML += '🏁'
    }

    
}
