"use strict"
var base = []


function del(id) {
    base.splice(id, 1)
    atualizarTab()
}


function cadastrar() {
    var cadastros = {}  
    let tabela = document.querySelector('table#tabela')
    let nomePessoa = document.querySelector('input#nome').value
    let email = document.querySelector('input#email').value
    let tel = document.querySelector('input#tel').value
    let cidade = document.querySelector('input#cidade').value
    tabela.style.display = 'block'
    cadastros.nome = nomePessoa
    cadastros.email = email
    cadastros.tel = tel
    cadastros.cid = cidade
    base.push(cadastros)
    //zerando o form
    document.querySelector('input').value = ''
    atualizarTab()
}

function atualizarTab() { /* mostra a lista de cadastro atualizada */
    tot.innerText = base.length
    tab.innerHTML = '' /* zerando a tabela para não duplicar os itens */
    for (let c = 0 ; c < base.length ; c++) {
        let linha = document.createElement('tr')
        linha.innerHTML = `<th>${c}<td>${base[c].nome} <td>${base[c].email}<td>${base[c].tel}<td>${base[c].cid} <td><button class="del" onclick="del(${c})">X</
button>`        
        tab.appendChild(linha)              
    }
    
}