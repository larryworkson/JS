/* SPREAD ...
Junta os elementos de arrays e objetos */

/* let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44]
let n3 = [...n1]

document.write(n3)
document.write(typeof(n3)) */

/* ÚTIL PARA SOMAR VALORES DE UM OBJETO */
/*
function somar(n1, n2, n3) {
    return n1 + n2 + n3
}

let valores = [10, 3, 4]
document.write(somar(...valores))
*/


/* ÚTIL PARA MANIPULAR UMA COLEÇÃO HTML  */

const objetos1 = document.getElementsByTagName("div") // uma coleção HTML só recebe elementos HTML
const objetos2 = [...document.getElementsByTagName("div")] // um Array pode receber outros tipos de elementos
//document.write(objetos1)
//document.write(objetos2)

for (item in objetos2) { /* usando o SPREAD é possível iterar uma coleção HTML */
    objetos2[item].innerHTML = 'teste'
}