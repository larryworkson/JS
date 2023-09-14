var resultado = document.querySelector('th#res')
var calc = document.querySelector('button#calc')
var n1 = []
let n2 = []
var op = ''
var lado = new Boolean (true)


resultado.innerText = ''
/* criei um boolean para saber se é o primeiro ou segundo valor que o usuário entrou. Se for o primeiro, ele vai para n1 se for o segundo vai para n2 */

function addnum(num){
    if (lado == true) {
        n1.push(num)
    }
    else {
        n2.push(num)
    }
    resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
}

function somar(){
    lado = false
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
        lado = true
    }
}

function zerar() {
    resultado.innerText = '0'
    op = ''
    n1 = []
    n2 = []
}