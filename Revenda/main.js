$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000
    });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    })

    // $('#telefone').mask('(00) 00000-0000')

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12)32495-8264 '
    })
});