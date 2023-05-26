const inputNumero1 = document.getElementById('num1');
const inputNumero2 = document.getElementById('num2');


form.addEventListener('submit',function(e){
    e.preventDefault();
    fazerCalculo();
})

function adicionarNumero(){
}

function fazerCalculo(){
    const somaValores = document.getElementById('soma');
    const subValores = document.getElementById('subtracao');
    const multValores = document.getElementById('multiplicacao');
    const divValores = document.getElementById('divisao');

    if(somaValores){
        resultadoSoma = inputNumero1 + inputNumero2
        alert(`a soma resultou em ${resultadoSoma}`)
    }
}