"use strict"
var base = []

function del(id) {
    base.splice(id, 1)
    atualizarTab()
}


function cadastrar() {
    var cadastros = {}
    var tabela = document.querySelector('table#tabela')
    var nomePessoa = document.querySelector('input#nome').value
    var email = document.querySelector('input#email').value
    var tel = document.querySelector('input#tel').value
    var cidade = document.querySelector('input#cidade').value
    tabela.style.display = 'block'
    cadastros.nome = nomePessoa
    cadastros.email = email
    cadastros.tel = tel
    cadastros.cid = cidade
    base.push(cadastros)
    atualizarTab()
}

function atualizarTab() { /* mostra a lista de cadastro atualizada */
    tot.innerText = base.length
    tab.innerHTML = '' /* zerando a tabela para não duplicar os itens */
    for (var c = 0 ; c <= base.length ; c++) {
        var linha = document.createElement('tr')
        linha.innerHTML = `<th>${c}<td>${base[c].nome} <td>${base[c].email}<td>${base[c].tel}<td>${base[c].cid} <td><button class="del" onclick="del(${c})">X</
button>`        
        tab.appendChild(linha)              
    }
    
}