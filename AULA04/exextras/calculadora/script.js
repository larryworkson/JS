var display = document.querySelector('th#res')
var n1 = []
let n2 = []
var hist = [] /* histórico de calculos, para usar resultados em outras operações */
var op = '' /* operador aritmetico */
var troca_num = new Boolean (true) /* muda a lista para qual o número será adicionado. Este boolean define se é o primeiro ou segundo valor que o usuário inseriu. Se for o primeiro, ele vai para n1 se for o segundo vai para n2 */


display.innerText = ''


function addnum(num){
    if (troca_num == true) {
        n1.push(num)
    }
    else {
        n2.push(num)
    }
    display.innerText = `${n1.join('')}${op}${n2.join('')}`
}

function somar(){
    troca_num = false
    op = '+'
    display.innerText = `${n1.join('')}${op}${n2.join('')}`

}

function calcular(){    
    if (op == '+') {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var s = Number(v1) + Number(v2)
        display.innerText = ''
        op = ''
        hist.push(s) /* adiciona o resultado da soma (s) no histórico */
        display.innerText = hist.slice(-1) /* apresenta o último item adicionado no histórico */
        n1 = [] /* limpa a lista */
        n2 = []
        n1.push(s) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
    }
}

function zerar() {
    display.innerText = '0'
    op = ''
    n1 = []
    n2 = []
}