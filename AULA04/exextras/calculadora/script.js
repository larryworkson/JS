var resultado = document.querySelector('th#res')
var n1 = []
let n2 = []
var op = '' /* operador aritmetico */
var troca_num = new Boolean (true) /* muda a lista para qual o número será adicionado. Este boolean define se é o primeiro ou segundo valor que o usuário inseriu. Se for o primeiro, ele vai para n1 se for o segundo vai para n2 */


resultado.innerText = ''


function addnum(num){
    if (troca_num == true) {
        n1.push(num)
    }
    else {
        n2.push(num)
    }
    resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
}

function somar(){
    troca_num = false
    op = '+'
    resultado.innerText = `${n1.join('')}${op}${n2.join('')}`

}

function calcular(){    
    if (op == '+') {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var s = Number(v1) + Number(v2)
        resultado.innerText = ''
        op = ''
        resultado.innerText = s
        n1 = []
        n2 = []
        troca_num = true
    }
}

function zerar() {
    resultado.innerText = '0'
    op = ''
    n1 = []
    n2 = []
}