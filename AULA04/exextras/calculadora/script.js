var display = document.querySelector('th#res')
var num7 = document.querySelector('th#num7')
var num8 = document.querySelector('th#num8')
var n1 = []
let n2 = []
var hist = [] /* histórico de calculos, para usar resultados em outras operações */
var op = '' /* operador aritmetico */
var troca_num = new Boolean (true) /* muda a lista para qual o número será adicionado. Este boolean define se é o primeiro ou segundo valor que o usuário inseriu. Se for o primeiro, ele vai para n1 se for o segundo vai para n2 */
display.innerText = '0'

function addnum(num){
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
    if (op == '+') {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var s = Number(v1) + Number(v2)
        display.innerText = ''
        op = ''
        if (Number(s) === s && s % 1 !== 0){
            hist.push(s.toFixed(2))
        }
        else {
            hist.push(s)
        }
         /* adiciona o resultado da soma (s) no histórico */
        display.innerText = hist.slice(-1) /* apresenta o último item adicionado no histórico arredondado*/
        n1 = [] /* limpa a lista */
        n2 = []
        n1.push(s) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
    }
}

function zerar() {
    display.innerText = '0'
    troca_num = true
    op = ''
    n1 = []
    n2 = []
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
    document.body.style.backgroundImage = `linear-gradient(${graus}deg, rgb(26, 0, 160), #000000)`;
    graus++;

    if (graus <= 365) {
        setTimeout(atualizarBackground, 10);
    }
    if (graus == 365){
        graus = 0
    }
}

atualizarBackground();


/* outros efeitos */
num7.addEventListener('click', clicar7)
num7.addEventListener('mouseout', sair7)

function clicar7() {
    num7.style.background = 'rgb(0, 19, 142)'
}
function sair7() {
    num7.style.background = '#000000'
}
num8.addEventListener('click', clicar8)
num8.addEventListener('mouseout', sair8)
function clicar8() {
    num8.style.background = 'rgb(0, 19, 142)'
}
function sair8() {
    num8.style.background = '#000000'
}
