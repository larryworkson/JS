/* Utilizando uma função dentro de outra função */

//utilizei o SPREAD para poder adicionar uma lista de itens a função
const soma = (...valores) => {
    const somando = valor => {
        let res = 0
        for (i of valor) {
            res += i
        }
        return res
    }
    return somando(valores)
}

console.log(soma(10, 10, 10, 70))