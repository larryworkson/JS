/* ARROW FUNCTION || FUNÕES LAMBDA
são formas concisas de funções anonimas */

const p=n=>'Nome: ' + n //arrow function com 1 parâmetro não precisa parênteses nem de RETURN
//se a função tiver somente uma linha de comanda, não precisa chaves {}
const soma2 = (v1, v2) => v1 + v2
console.log(soma2(10, 30))
console.log(p('Larry'))