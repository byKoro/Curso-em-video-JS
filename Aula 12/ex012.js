var agora = new Date()
var horario = agora.getHours()    
console.log(`Agora são exatamente ${horario} horas.`)
if (horario < 4) {
    console.log('Boa Madrugada')
} else if (horario < 12) {
    console.log('Bom Dia!')
} else if (horario <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}