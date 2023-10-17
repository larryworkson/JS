/* FUNCÕES GEDADORAS
são funções que executam parcialmente seu conteúdo. Os breakpoints são marcados com YIELD. Ele determina o que será retornado se a função for chamada naquele ponto. Estas funções funcionam como iteradores. Cada vez que você chamar, virá um resultado diferente de acordo com o YIELD subsequênte.

 */

function* cores(){
    yield 'vermelho' //1ª iteração
    yield 'verde' //2ª iteração
    yield 'azul' //3ª iteração
}

const n = cores() //1ª chamada ativa a função (retorna o iterador)
console.log(n.next().value) //2ª chamada retorna o valor da próximo yield, no caso 'vermelho'
console.log(n.next().value) //3ª chamada retorna próximo yield, 'verde'
console.log(n.next().value) //4ª chamada retorna o próximo yield, 'azul'
console.log(n.next().value) //como não tem mais nada para retornar, o resultado de uma 5ª chamada é undefined


//-------------------------------------------------------------------------------------------------------------------

function* perguntas(){
    const nome = yield 'qual seu nome?'
    const esporte = yield 'qual seu esporte favorito?'
    return `seu nome é ${nome}, e seu esporte favorito é ${esporte}`
}


/* Quando eu chamo a função atribuindo um valor, eu chamo o próximo yield e a atribuição vai para o último yield chamado */
const i = perguntas() //ativa a função
console.log(i.next().value) //2ª chamada retorna o 1º yield ('qual seu nome')
console.log(i.next('larry').value) //3ª chamada 'qual seu esporte favorito' e ao mesmo tempo atribui 'larry' a const nome
console.log(i.next('basquete').value) //4ª chamada 'return' e ao mesmo tempo atribui 'basquete' a const espoerte.


//--------------------------------------------------------------------------------------------------------------------

/* aplicando funções geradoras com loop */
/* loop infinito armazenado dentro de uma função geradora. Sempre que eu quiser um novo número, dentro de uma sequência Eu chamo ela. */
function* contador() {
    let p = 0
    while(true){
        yield p++
        // if (p == 100-) pode adicionar uma condição para interromper o loop
            //break
    }
}
const itc = contador()
for (let v = 0 ; v < 10 ; v++){ //chamando a função 10x ela vai gerar 10 números.
    console.log(itc.next().value)
}
