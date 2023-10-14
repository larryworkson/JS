/* FUNÇÃO ANÔNIMA não precisa de nome mas precisa ser associada a uma variável */

const f = function(...valores){
    res = 0
    for (v of valores){
        res += v
    }
    return res
}

console.log(f(10,5, 10)) 
/* função construtor (new) anônima
serve para operações simples */

const g = new Function("v1", "v2", "return v1 + v2") // o último parâmetro é o corpo da função
console.log(g(20, 20))