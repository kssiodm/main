$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown();
    })
    
    $('#botao_cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('#nome').mask('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', {
        placeholder: 'seu nome'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12)32495-8264'
    })

    $('#cpf').mask('00000000000', {
        placeholder: '253.854.236-86'
    })

    $('#cep').mask('00000000000', {
        placeholder: '865.541.756-42'
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
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'por favor, informe seu nome!',
            telefone: 'por favor, informe seu telefone!',
            email: 'por favor, informe seu E-email!',
            cpf: 'por favor, informe seu CPF!',
            endereco: 'por favor informe seu endereço!',
            cep: 'por favor informe seu CEP!'
        },
    })
})