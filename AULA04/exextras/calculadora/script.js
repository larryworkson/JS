var display = document.querySelector('th#res')
var num7 = document.querySelector('th#num7')
var num8 = document.querySelector('th#num8')
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
    igual = true 
    if (op == '+') {
        let v1 = n1.join('')
        let v2 = n2.join('')
        var s = Number(v1) + Number(v2)
        display.innerText = ''
        op = ''
        if (Number(s) === s && s % 1 !== 0){ /* se o resultado for um Float, deve terá apenas 2 casas decimais */
            hist.push(s.toFixed(2))
        }
        else {
            hist.push(s)
        }
         /* adiciona o resultado da soma (s) no histórico */
        display.innerText = hist.slice(-1) /* apresenta o último item adicionado no histórico*/
        n1 = [] /* limpa a lista */
        n2 = []
        n1.push(s) /* considera o resultado do último cálculo como primeiro valor de uma nova operação */
        troca_num = true /* volta a considerar a n1 para receber os dados */
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
    document.body.style.backgroundImage = `linear-gradient(${graus}deg, rgb(0, 19, 142), 20%, #000000)`;
    graus++;

    if (graus <= 365) {
        setTimeout(atualizarBackground, 50);
    }
    if (graus == 365){
        graus = 0
    }
}

atualizarBackground();


/* outros efeitos */
function clicou(numdigitado) {
    numdigitado.addEventListener('click', clicar)
    numdigitado.addEventListener('mouseout', sair)
    function clicar() {
        numdigitado.style.background = 'rgb(0, 19, 142)'
    }
    function sair() {
        numdigitado.style.background = '#000000'
    }
}

clicou(num7)
clicou(num8)
