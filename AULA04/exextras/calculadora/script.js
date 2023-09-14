var resultado = document.querySelector('th#res')
var calc = document.querySelector('button#calc')
var n1 = []
let n2 = []
var op = ''
var lado = new Boolean (true)
var adicao = new Boolean (false) /* esta variável só é ativada se o usuário clicar em + */

resultado.innerText = ''
/* criei um boolean para saber se é o primeiro ou segundo valor que o usuário entrou. Se for o primeiro, ele vai para n1 se for o segundo vai para n2 */
function num0() {
    if (lado == true) {
        n1.push(0)
        resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
    }
    else {
        n2.push(0)
        resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
        
    }
    }

function num1() {
    if (lado == true){    
        n1.push(1)
        resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
    }
    else {
        n2.push(1)
        resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
    }
}

function num2() {
    if (lado == true) {
        n1.push(2)
        resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
    }
    else {
        n2.push(2)
        resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
    }
}

function num3() {
    if (lado == true) {
        n1.push(3)
        resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
    }
    else {
        n2.push(3)
        resultado.innerText = `${n1.join('')}${op}${n2.join('')}`
    }
}

function somar(){
    lado = false
    adicao = true
    op = '+'
    resultado.innerText = `${n1.join('')}${op}${n2.join('')}`

}

function calcular(){    
    if (adicao == true) {
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