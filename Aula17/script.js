/*let arrayValores = []
let select = document.getElementById('select')
let analisar = document.getElementById('resultados')

function adicionar() {
    let inputAdicionarValores = document.getElementById("adicionarvalores")
    if (inputAdicionarValores.value.length > 0 && inputAdicionarValores.value > 0 && inputAdicionarValores.value <= 100 ){
        arrayValores.push(inputAdicionarValores.value)
        console.log(arrayValores)
        addValoresToSelect(inputAdicionarValores.value)
        inputAdicionarValores.value = ''
        return arrayValores  
    }else if ( arrayValores.length > 0) {
        return arrayValores
    }else {
        alert('Valores Invalidos')
        return arrayValores = ''
    }
    function addValoresToSelect(valores){
        let addOption = document.createElement('option')
        addOption.value = `${valores}`
        addOption.text += ` Valor ${valores} adicionado.`
        select.add(addOption)
    }
    
}

function validar(array) {
    if (array.length > 0) {
        let arrayOrganizada = array.sort()
        analisar.innerHTML = ''
        analisar.innerHTML += `Ao todo, temos ${array.length} números cadastrados.<p>`
        analisar.innerHTML += `O maior valor informado foi ${arrayOrganizada[array.length - 1]}<p>`
        analisar.innerHTML += `O menor valor informado foi ${arrayOrganizada[0]}<p>`
        let somaArray = 0
        for (let i = 0; i < array.length; i++){
            somaArray = Number(somaArray) + Number(array[i])
        }
        analisar.innerHTML += `A soma de todos os valores é de ${somaArray}<p>`
        analisar.innerHTML += `A média dos valores é de ${somaArray / array.length}`
    }else{
        console.log('Não')
    }
}*/

var valoresArray = []
var inputAdicionarValores = document.getElementById('adicionarvalores')
var selectValores = document.getElementById('select')
var resultadosDiv = document.getElementById('resultados')
function adicionar() {
    if (inputAdicionarValores.value > 0 && inputAdicionarValores.value <= 100) {
        
        function addValorSelect(valor) {
            let addOption = document.createElement('option')
            addOption.value = `${valor}`
            addOption.text += `Valor ${valor} adicionado`
            selectValores.add(addOption)
        }

        for (let i = 0; i <= valoresArray.length; i++) {
            if (valoresArray[i] == inputAdicionarValores.value) {
                var valorAdicionado = true  
            }
        }
        
        if (valorAdicionado == true) {
            alert('Valor já adicionado.')
        }else {
            valoresArray.push(inputAdicionarValores.value)
            addValorSelect(inputAdicionarValores.value)
            
            valorAdicionado = false
            
        }
    
        
    }else {
        alert('valores inválidos')
    }
    resultadosDiv.innerHTML = ''
    return valoresArray
    
}


function validar() {
    if ( valoresArray.length > 0) {
        resultadosDiv.innerHTML = ''
        resultadosDiv.innerHTML += `Ao todo, temos ${valoresArray.length} números cadastrados.<p>`
        valoresArray.sort()
        resultadosDiv.innerHTML += `O menor valor informado foi ${valoresArray[0]}<p>`
        resultadosDiv.innerHTML += `O menor valor informado foi ${valoresArray[valoresArray.length - 1]}<p>`
        
        function somaArray() {
            let resultado = 0
            for (let i = 0; i < valoresArray.length; i++){
                resultado += Number(valoresArray[i])
            }
            return resultado
        }
        resultadosDiv.innerHTML += `A soma de todos os valores é de ${somaArray()}<p>`
        resultadosDiv.innerHTML += `A média dos valores é de ${somaArray() / valoresArray.length}`
    }else {
        alert('Você não adicionou nenhum valor válido.')
    }
}