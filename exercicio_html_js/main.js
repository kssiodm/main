const form = document.getElementById('form_dep')

form.addEventListener('submit', function(e){

    // let formValido = false;

    e.preventDefault();

    const valor_a = document.getElementById('numero_a');
    const valor_b = document.getElementById('numero_b');
    const menssagemdeSucesso = ` ${valor_b.value} é maior que ${valor_a.value}`

    if(parseInt(valor_b.value) > parseInt(valor_a.value)){
        alert(menssagemdeSucesso)
        valor_b = ' ';
        valor_a = ' ';
    }else{
        alert('inválido')
    }
})