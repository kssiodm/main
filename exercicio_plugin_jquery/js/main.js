$(document).ready(function(){
    $('#nome').mask('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', {
        placeholder: 'fulano beltrano'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12)32495-8264'
    })

    $('#cpf').mask('000000000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('000000000-00', {
        placeholder: '000.000.000-00'
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
            veiculo_interesse: {
                required: true
            }
        }
    })
})