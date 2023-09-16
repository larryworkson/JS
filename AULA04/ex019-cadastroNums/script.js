var lista = []
var analise = document.querySelector('div#analise')

function adicionar(){
    var nalista = false /* Se esta var for igual a true, o nº não é adicionado na lista. Do contrário, o nº é armazenado.  */
    var num = document.querySelector('input#num').value    
    analise.innerText = ''
    if (num == '') {
        window.alert('Insira um valor!')
    }
    else if (num < 1 || num > 100) {
        window.alert('Insira um valor entre 1 e 100!')
    }
        
    else if  (num != '') {
        if (lista.length > 0) {
            for (cont = 0 ; cont < lista.length ; cont++) {
            /* outra solução: lista.indexOf(num) != -1 */
                if (num == lista[cont]){
                    window.alert('Este nº já foi adicionado! Tente outro.')      
                    nalista = true                                     
                }
            }
        }
        if (nalista == false) {
            var tab = document.querySelector('select#tab')
            var item = document.createElement('option')
            item.text = `Foi adicionado o nº ${num}`
            tab.appendChild(item)
            lista.push(num)

        }
        /* deixa o valor do input zerado e o click do mouse dentro do campo */
        num.value = ''
        num.focus()
                                                                                             
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
        analise.innerText = `Ao todo temos ${lista.length} números cadastrados
        O maior valor informado foi ${Math.max(...lista)}
        O menor valor informado foi ${Math.min(...lista)}
        A soma de todos os valores é ${somaLista(lista)}
        A média dos valores digitado é ${mediaLista(lista)}`        
    }
}

