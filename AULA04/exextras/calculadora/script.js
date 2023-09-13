var resultado = document.querySelector('h1#res')
var test1 = document.querySelector('h1#v1')
var test2 = document.querySelector('h1#v2')
var resp = document.querySelector('h1#r')
var calc = document.querySelector('button#calc')
var n1 = []
let n2 = []
var lado = new Boolean (true)
var adicao = new Boolean (false) /* esta variável só é ativada se o usuário clicar em + */

/* criei um boolean para saber se é o primeiro ou segundo valor que o usuário entrou. Se for o primeiro, ele vai para n1 se for o segundo vai para n2 */
function num1() {
    if (lado == true){    
        n1.push(1)
        resultado.innerText += n1.slice(-1) /* pega o último valor do array */
    }
    else {
        n2.push(1)
        resultado.innerText += n2.slice(-1)
    }
}

function num2() {
    if (lado == true) {
        n1.push(2)
        resultado.innerText += n1.slice(-1)
    }
    else {
        n2.push(2)
        resultado.innerText += n2.slice(-1)
    }
}

function num3() {
    if (lado == true) {
        n1.push(3)
        resultado.innerText += n1.slice(-1)
    }
    else {
        n2.push(3)
        resultado.innerText += n2.slice(-1)
    }
}

function somar(){
    lado = false
    adicao = true
    resultado.innerText += '+'

}

function calcular(){    
    if (adicao == true) {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var s = Number(v1) + Number(v2)
        resultado.innerText = ''
        resultado.innerText = s
        n1 = []
        n2 = []

    }
}

function zerar() {
    resultado.innerText = ''
}