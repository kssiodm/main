function inserir(num){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
}

function deletar(){
    document.getElementById('resultado').innerHTML = "";
}

function limpar(){
    
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = ""
    }
}