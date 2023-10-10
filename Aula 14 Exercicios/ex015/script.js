function contar() {
    let inputStart = document.getElementById("start").value
    let inputEnd = document.getElementById("end").value
    let inputSteps = document.getElementById("steps").value
    let outputResult = document.getElementById("result")
    
    if (inputStart.length == 0 || inputEnd.length == 0 || inputSteps.length == 0) {
        outputResult.innerHTML = "Você esqueceu de escrever alguns valores."
        outputResult.style.color = 'red'
    }
    else if (inputSteps <= 0){
        inputSteps = 1
    }
    else {
        
        let start = Number(inputStart)
        let end = Number(inputEnd)
        let steps = Number(inputSteps)
        if (start < end) {
            for(let c = start; c <= end; c += steps) {
                outputResult.innerHTML += `${c} \u{1f449}`
        }
        }
        else {
            for(let c = start; c>= end; c-= steps)
            outputResult.innerHTML += `${c} \u{1f449}`
        }
        outputResult.innerHTML += `\u{1F3C1}`
    }
}
