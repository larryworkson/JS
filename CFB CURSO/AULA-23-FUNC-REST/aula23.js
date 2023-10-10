/* REST = permite adicionar um numero de parâmetros indefinido */

/* UTILIZA-SE ... (tres pontos) para criar uma lista (SPREAD) */

function soma(...valores){
    return valores.length
}

console.log(soma(10, 5))


/* FUNÇÃO PARA SOMAR VÁRIAS VALORES */
function soma(...valores){
    let s = 0
    for (let i of valores) {
        s += i
    }
    return s
}

console.log(soma(10, 5, 1, 1))