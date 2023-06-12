$(document).ready(function(){

    $('#nome').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12)32495-8264'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            endereco: {
                required: true
            },
        },
        messages: {
            nome: 'por favor, informe seu nome!',
            telefone: 'por favor, informe seu telefone!',
            email: 'por favor, informe seu E-email!',
            endereco: 'por favor informe seu endereço!',
        },
    })
})