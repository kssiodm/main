$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000
    });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
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
            veiculo_interesse: {
                required: true
            }
        },
        messages: {
            nome: 'por favor, informe seu nome!',
            telefone: 'por favor, informe seu telefone!',
            email: 'por favor, informe seu E-email!',
            veiculo_interesse: 'por favor, informe um veiculo de seu interesse!'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(e, validador){
            let campoIncorretos = validador.numberOfInvalids()

            if(campoIncorretos){
                alert(`existem ${campoIncorretos} campos incorretos!`)
            }
        }
    });

    $('.lista_veiculos button').click(function(){
        const destino = $('#formulario');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#lista_veiculos').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})