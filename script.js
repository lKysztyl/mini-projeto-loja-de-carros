$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true
    });
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculosDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor insira seu nome',
            telefone: 'Por favor insira seu telefone',
            email: 'Por favor insira seu email'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids()
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos incorretos`)
            }
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculosDeInteresse').val(nomeVeiculo);


        $('html').animate({
            scrollTop: destino.offset().top
        }, 1500)
    });
        
});