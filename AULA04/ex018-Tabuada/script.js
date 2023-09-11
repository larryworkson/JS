function multiplicar(){
    var n = window.document.querySelector('input#num').value    
    var tab = document.querySelector('select#tab')
    tab.innerHTML = ''

    if (n == ''){
        window.alert('Por favor digite algum número!')
    }
    else {
    var c = 1
    while (c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab$${c}`
        tab.appendChild(item)
        c++
    }
    }
}
