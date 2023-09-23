var display = document.querySelector('th#res')
var btnigual = document.querySelector('th#calc')
var btnoperadores = document.getElementsByClassName('operadores')
var n1 = []
let n2 = []
var hist = [] /* histórico de calculos, para usar resultados em outras operações */
var op = '' /* operador aritmetico */
var troca_num = new Boolean (true) /* muda a lista para qual o número será adicionado. Este boolean define se é o primeiro ou segundo valor que o usuário inseriu. Se for o primeiro, ele vai para n1 se for o segundo vai para n2 */
var igual = false /* torna-se true quando usuário clica em = */
display.innerText = '0'



function addnum(num){
    if (igual == true && op == '') { /* se usuário já clicou em = e não adicionou um operador (op), significa que ele não está deseja usar o histórico. Então a n1 é zerada, para zerar o display */
        n1 = []
        igual = false /* ao zerar a n1, a var igual tbm volta ao estado original (false) */
    }
    if (troca_num == true) {
        n1.push(num)
    }
    else {
        n2.push(num)
    }
    display.innerText = `${n1.join('')}${op}${n2.join('')}`
}

function operar(operador){
    if (n1.length == 0) {
        window.alert('Insira pelo menos um número.')
    }
    else {
    troca_num = false
    op = operador
    display.innerText = `${n1.join('')}${op}${n2.join('')}`
    }

}

function calcular(){
    numsaleatorios = []
    for (c = 0; c <= 2; c++) {
        let numaleatorio = Math.floor(Math.random() * 255) + 1
        numsaleatorios.push(numaleatorio)
    }
    igual = true 
    if (op == '+') {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var s = Number(v1) + Number(v2)
        display.innerText = ''
        op = ''
        if (Number(s) === s && s % 1 !== 0){ /* se o resultado for um Float, deve terá apenas 2 casas decimais */
            hist.push(s.toFixed(2))
            n1 = [] /* limpa a lista */
            n2 = []
            n1.push(s.toFixed(2)) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        }
        else {
            hist.push(s)
            n1 = [] /* limpa a lista */
            n2 = []
            n1.push(2) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        }
         /* adiciona o resultado da soma (s) no histórico */
        display.innerText = hist.slice(-1) /* apresenta o último item adicionado no histórico*/        
        troca_num = true /* volta a considerar a n1 para receber os dados */
    }
    if (op == '-') {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var sub = Number(v1) - Number(v2)
        display.innerText = '' 
        op = ''
        if (Number(sub) === sub && sub % 1 !== 0) { /* se o resultado for um Float, deve terá apenas 2 casas decimais */
            hist.push(sub.toFixed(2))
            n1 = [] /* limpa a lista */
            n2 = []
            n1.push(sub.toFixed(2)) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        }
        else {          /* adiciona o resultado da subtração (sub) no histórico */
            hist.push(sub)
            n1 = [] /* limpa a lista */
            n2 = []
            n1.push(sub) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        }
        display.innerText = hist.slice(-1) /* apresenta o último item adicionado no histórico*/
        troca_num = true /* volta a considerar a n1 para receber os dados */
    }
    if (op == '÷') {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var div = Number(v1) / Number(v2)
        display.innerText = '' 
        op = ''
        if (Number(div) === div && div % 1 !== 0) { /* se o resultado for um Float, deve terá apenas 2 casas decimais */
            hist.push(div.toFixed(2))
            n1 = [] /* limpa a lista */
            n2 = []
            n1.push(div.toFixed(2)) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        }
        else {          /* adiciona o resultado da subtração (sub) no histórico */
            hist.push(div)
            n1 = [] /* limpa a lista */
            n2 = []
            n1.push(div) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        }
        display.innerText = hist.slice(-1) /* apresenta o último item adicionado no histórico*/
        troca_num = true /* volta a considerar a n1 para receber os dados */
 
    }
    if (op == '*') {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var multi = Number(v1) * Number(v2)
        display.innerText = '' 
        op = ''
        if (Number(multi) === multi && multi % 1 !== 0) { /* se o resultado for um Float, deve terá apenas 2 casas decimais */
            hist.push(multi.toFixed(2))
            n1 = [] /* limpa a lista */
            n2 = []
            n1.push(multi.toFixed(2)) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        }
        else {          /* adiciona o resultado da subtração (sub) no histórico */
            hist.push(multi)
            n1 = [] /* limpa a lista */
            n2 = []
            n1.push(multi) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        }
        display.innerText = hist.slice(-1) /* apresenta o último item adicionado no histórico*/
        troca_num = true /* volta a considerar a n1 para receber os dados */
        /* mudando a cor da calculadora */

    }
    /* mudando a cor da calculadora */
    if (hist.slice(-1) == 7) {    
        for (var i = 0; i < btnoperadores.length; i++) { /*   para aplicar o efeito a todos os elementos da class operadores, precisa fazer um laço. Funciona como uma lista.   */   
            btnigual.style.background = `rgb(${numsaleatorios[0]}, ${numsaleatorios[1]}, ${numsaleatorios[2]})`
            btnoperadores[i].style.color = `rgb(${numsaleatorios[0]}, ${numsaleatorios[1]}, ${numsaleatorios[2]})`

        }
    }
}

function zerar() {
    display.innerText = '0'
    troca_num = true
    igual = false
    op = ''
    n1 = []
    n2 = []
    hist = []
}

function deletar() {
    if (troca_num == true) {
        n1.pop()
    }
    else {
        if (n2.length > 0) {
        n2.pop() 
        }
        else {
            op = ''
            troca_num = true
        }
    }
    display.innerText = `${n1.join('')}${op}${n2.join('')}`
}

/* efeitos extras */
/* background dinamico */

var graus = 0;
function atualizarBackground() {
    document.body.style.backgroundImage = `linear-gradient(${graus}deg, rgb(0, 10, 82), 10%, #000000)`;
    graus++;

    if (graus <= 365) {
        setTimeout(atualizarBackground, 50);
    }
    if (graus == 365){
        graus = 0
    }
}
atualizarBackground();



