"use strict"
function teste() {
    if (true) {
        let nome = 'Bruno'
        console.log('dentro de IF teste: '+nome)
    }
}
teste()
//console.log('fora do teste: '+nome) // vai dar erro aqui

/* diferenças entre VAR, LET, E CONST
    VAR a variável recebe escopo GLOBAL
    LET a variável recebe escopo LOCAL
    CONST uma variável que não pode ter conteúdo alterado
 */

const pop = 'Valor inicial'
pop = 3
console.log(pop)