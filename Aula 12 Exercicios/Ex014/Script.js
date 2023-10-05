function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas`
    var style = document.body.style
    if (horas >= 0 && horas <= 12) {
        // BOM DIA
        msg.innerHTML = `Olá Mundo, Agora são ${horas} horas, tenha um Bom Dia !`
        img.src = "Manhã.png"
        style.background = '#fbca96'
        
    }else if (horas >= 13 && horas < 18 ) {
        //BOA TARDE
        msg.innerHTML = `Olá Mundo, Agora são ${horas} horas, tenha uma Boa Tarde !`
        img.src = "Tarde.png"
        style.background = '#ef6a00'
    }else {
        //BOA NOITE
        msg.innerHTML = `Olá Mundo, Agora são ${horas} horas, tenha uma Boa Noite !`
        img.src = "Noite.png"
        style.background = '#001f35'
        
    }
}
