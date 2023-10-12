function tabuada() {
    let inputNum = Number(document.getElementById("txtnum").value)
    let boxTabuada = document.getElementById("tabuada")

    boxTabuada.innerHTML = ''
    if (inputNum.length != 0 ) {
        for (let c = 1; c <= 10; c++) {
            let addOption = document.createElement("option")
            addOption.value = inputNum * c
            addOption.text += `${inputNum} x ${c} = ${addOption.value}`
            boxTabuada.add(addOption)
        }
    }else {
        let msgerro = document.createElement('p')
        let div = document.getElementById("resposta")
        msgerro.innerHTML = "Erro"
        div.appendChild(msgerro)
        div.style.color = 'red'
    }
}
