/* é possível colocar um valor padrão utilizando uma variável */
const valorPadrao = 0
function soma(n1=valorPadrao, n2=valorPadrao) {
    let res = n1 + n2
    return res
}

console.log(soma(3,5))
