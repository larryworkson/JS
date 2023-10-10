/* o RETURN retorna um valor que pode ser manipulado pelo script */

function canal() {
    let n1 = 10
    let n2 = 2
    let res = n1*n2
    if (res % 2 == 0)
        return 'par'
    else 
        return 'impar'

}

let n = canal()
console.log(n)