"use strict"


function cadastrar() {
    var cadastros = {nome: '1', email: '2', tel: '3', cid: '4'}
    var nome = document.querySelector('input#nome').value
    var email = document.querySelector('input#email').value
    var tel = document.querySelector('input#tel').value
    var cidade = document.querySelector('input#cidade').value
    var tab = document.querySelector('tbody#tab')
    cadastros.nome = nome
    cadastros.email = email
    cadastros.tel = tel
    cadastros.cid = cidade
    var linha = document.createElement('tr')
    linha.innerHTML = `<td>${cadastros.nome} <td>${cadastros.email}`
    tab.appendChild(linha)

 /*    
 Falta enviar tel e cidade para a tabela.
 ver uma forma de adicionar cada cadastro sem ter que criar uma nova variável toda vez */
   

    
    


}