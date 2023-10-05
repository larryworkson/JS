"use strict"
var base = []

function del(id) {
    base.splice(id, 1)
    atualizarTab()
}

function atualizarTab() {
    tot.innerText = base.length
    tab.innerHTML = '' /* zerando a tabela para não duplicar os itens */
    for (var c = 0 ; c <= base.length ; c++) {
        var linha = document.createElement('tr')
        linha.innerHTML = `<th>${c}<td>${base[c].nome} <td>${base[c].email}<td>${base[c].tel}<td>${base[c].cid} <td><button onclick="del(${c})">DEL</button>`        
        tab.appendChild(linha)              
    }
    
}

function cadastrar() {
    var cadastros = {}
    var tabela = document.querySelector('table#tabela')
    var nomePessoa = document.querySelector('input#nome').value
    var email = document.querySelector('input#email').value
    var tel = document.querySelector('input#tel').value
    var cidade = document.querySelector('input#cidade').value
    var tab = document.querySelector('tbody#tab')
    var tot = document.querySelector('td#tot')
    tabela.style.display = 'block'
    cadastros.nome = nomePessoa
    cadastros.email = email
    cadastros.tel = tel
    cadastros.cid = cidade
    base.push(cadastros)
    atualizarTab()
}
