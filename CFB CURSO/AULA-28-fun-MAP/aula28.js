/* MAP Função que itera TODOS os elementos de uma coleção, sem interrupções */
const cursos = ['html', 'css', 'javascript', 'php', 'react']
let c=cursos.map((item, pos)=>{ /* 1º parâm: elemento > 2º parâm: índice > 3º parâm:  */
    //console.log('curso: ' + item + ' pos: ' + pos)
    return `<h1>${item}</h1>`
}
) 

console.log(c)