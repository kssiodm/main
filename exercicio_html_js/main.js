const form = document.getElementById('form_dep')

form.addEventListener('submit', function(e){

    // let formValido = false;

    e.preventDefault();

    const valor_a = document.getElementById('numero_a');
    const valor_b = document.getElementById('numero_b');
    const mensagemdeSucesso = `<b>${valor_b.value}</b> é maior que <b>${valor_a.value}</b>`

    if(parseInt(valor_b.value) > parseInt(valor_a.value)){
        const containerMensagemdeSucesso = document.querySelector('.maior');
        containerMensagemdeSucesso.innerHTML = mensagemdeSucesso;
        containerMensagemdeSucesso.style.display = 'block'
        // document.querySelector('.maior').style.display = 'block'
    }else{
        document.querySelector('.invalido').style.display = 'block'
    }
})