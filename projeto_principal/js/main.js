$(document).ready(function(){

    $("#submit_button1").click(function() {
        var nome1 = $("#nome1").val();
        var email1 = $("#email1").val();

        if (nome1 === "" || email1 === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
        }

        alert("Formulário enviado com sucesso!");
        $("#formulario").submit();
    });

    $("#submit_button2").click(function() {
        var nome2 = $("#nome2").val();
        var email2 = $("#email2").val();

        if (nome2 === "" || email2 === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
        }

        alert("Formulário enviado com sucesso!");
        $("#formulario").submit();
    })

    $('#nome_modal1').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#nome_modal2').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#nome_modal3').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#nome1').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#nome2').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#tel_modal1').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })

    $('#tel_modal2').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })

    $('#tel_modal3').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })

    $('#telefone1').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })

    $('#telefone2').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })


    $('form').validate({
        rules: {
            nome1: {
                required: true
            },
            nome2: {
                required: true
            },
            telefone1: {
                required: true
            },
            email1: {
                required: true,
                email: true
            },
            email2: {
                required: true,
                email: true
            },
            endereco: {
                required: true
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome1: 'por favor, informe seu nome!',
            nome2: 'por favor, informe seu nome!',
            telefone1: 'por favor, informe seu telefone!',
            telefone2: 'por favor, informe seu telefone!',
            email1: 'por favor, informe seu E-email!',
            email2: 'por favor, informe seu E-email!',
            endereco: 'por favor informe seu endereço!',
            mensagem: 'por favor insira uma mensagem!',
        },
    })
})