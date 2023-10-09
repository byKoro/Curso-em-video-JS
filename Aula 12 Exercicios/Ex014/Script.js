var ano_atual = new Date().getFullYear() // Pegar o ano atual;

function identificar() {
    let input_ano = document.getElementById("txtano").value
    
    function calcularIdade(){
        let Idade = ano_atual - input_ano
        return Idade
    }
    calcularIdade() // Calcula o ano digitado menos o ano atual;

    function sexoDefinir() {
        let Sexo = document.getElementsByName("radsex")
        Sexo[0].checked ? Sexo = 'Masculino' : Sexo = 'Feminino'
        return Sexo
    }
    sexoDefinir()   // Salva o sexo selecionado pelo usuário;

    function mostrarResultado(Sexo , Idade) {
        var mostrarResultado = document.getElementById('res')
        mostrarResultado.innerHTML = `Você é uma pessoa do sexo : ${Sexo} <br>Sua idade é : ${Idade} anos`
        mostrarResultado;
    }
    mostrarResultado(sexoDefinir(),calcularIdade()) // Mostrar o resultado na tela;

    function mostrarImagem(Sexo , Idade) {
        function imagem(escolherFoto) {
            let localImagem = document.getElementById('foto')
            localImagem.setAttribute("src" , escolherFoto)
        }        
        if (Idade >= 0 && Idade < 10) { // Criança
            Sexo    ==  'Masculino' ?   imagem("homem-criança.png")   :   imagem("mulher-criança.png")
        }else if (Idade < 21) { // Adolescente
            Sexo    ==  'Masculino' ?   imagem("homem-adolescente.png")   :   imagem("mulher-adolescente.png")
        }else if(Idade < 50) {  // Adulto
            Sexo    ==  'Masculino' ?   imagem("homem-adulto.png")  :   imagem("mulher-adulto.png")
        }else { // Idoso
            Sexo    ==  'Masculino' ?   imagem("homem-idoso.png")   :   imagem("mulher-idosa.png")
        }
    }
    mostrarImagem(sexoDefinir() , calcularIdade())
}