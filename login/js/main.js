$(document).ready(function(){

    $('#nome').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    const ponto = '.';
    const traco = '-';

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12)32495-8264'
    })

    

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            senha: {
                required: true
            },
        },
        messages: {
            nome: 'por favor, informe seu nome!',
            email: 'por favor, informe seu E-email!',
            senha: 'por favor, informe sua senha!',
        },
    })
})