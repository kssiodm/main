$(document).ready(function(){
    $('header button').click(function(e){
        $('#form').slideDown();
    })

    $('#botao_cancelar').click(function(){
        $('#form').slideUp();
    })
});

function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
    document.getElementById('resultado').innerHTML = "Por favor, insira valores numéricos válidos.";
    return;
    }

    var imc = peso / (altura * altura);

    document.getElementById('resultado-imc').innerHTML = "Seu IMC é: " + imc.toFixed(2);

    var categoria = "";
    if (imc < 17){
        categoria = "Muito Abaixo do peso";
    }else if(imc >= 17 && imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        categoria = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        categoria = "Obesidade Grau II";
    } else {
        categoria = "Obesidade Grau III";
    }

    document.getElementById('resultado-categoria').innerHTML = "Categoria: " + categoria;
}

document.getElementById('calcular').addEventListener('click', calcularIMC);