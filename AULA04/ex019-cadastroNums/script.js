var lista = []

function adicionar(){
    var num = document.querySelector('input#num').value
    if (num == '') {
        window.alert('Insira um valor!')
    }
        if (num < 1 || num > 100) {
            window.alert('Insira um valor entre 1 e 100!')
        }
        
        else {
            var tab = document.querySelector('select#tab')
            var item = document.createElement('option')
            item.text = `Foi adicionado o nº ${num}`
            tab.appendChild(item)
            lista.push(num)
        }
}

function somaLista(nums) {
    var s = 0
    for (c = 0 ; c < nums.length ; c++){
        s += Number(nums[c])
    }
    return s
}

function mediaLista(listagem) {
    var media = somaLista(listagem) / listagem.length
    return media.toFixed(2)

}


function finalizar(){
    if (lista.length == 0) {
        window.alert('Insira um valor!')
    }
    else {
        var analise = document.querySelector('div#analise')
        analise.innerText = `Ao todo temos ${lista.length} números cadastrados
        O maior valor informado foi ${Math.max(...lista)}
        O menor valor informado foi ${Math.min(...lista)}
        A soma de todos os valores é ${somaLista(lista)}
        A média dos valores digitado é ${mediaLista(lista)}`        
    }
}

// ao add número depois da analise, zerar a analise.
// não deixar add o mesmo número na lista
