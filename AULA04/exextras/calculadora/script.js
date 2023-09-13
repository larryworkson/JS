var resultado = document.querySelector('h1#res')
var test1 = document.querySelector('h1#v1')
var test2 = document.querySelector('h1#v2')
var resp = document.querySelector('h1#r')
var calc = document.querySelector('button#calc')
var n1 = ''
let n2 = ''

function num1() {
    n1 += '1'
    resultado.innerText = n1
}

function num2() {
    n1 += '2'
    resultado.innerText = n1
}

function num3() {
    n1 += '3'
    resultado.innerText = n1
}

function somar(){
    var v1 = Object.assign(Number(n1))
    n1 = ''
    test1.innerText = v1
}

function calcular(){
    var v2 = Object.assign(Number(n1))
    test2.innerText = v2
    let soma = v1.value + v2.value  
    resp.innerText = soma


}
