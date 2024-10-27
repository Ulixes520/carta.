$(window).scroll(function () {   
    var scr = $(window).scrollTop(),
        C = $('#contenedor'),
        A = $('#abrir'),
        E = $('#carta'),
        F = $('#carta hgroup h2'),
        P = $('#perspectiva');

    // Giro y abertura
    if (scr >= 100) {
        C.css({
            'transition': 'all 1s',
            'transform': 'rotateY(180deg)'
        });
        A.css({
            'transition': 'all 1s .5s',
            'transform': 'rotateX(180deg)',
            'z-index': '0'
        });
    } else if (scr <= 100) {
        C.css({
            'transition': 'all 1s .5s',
            'transform': 'rotateY(0deg)'
        });
        A.css({
            'transition': 'all 1s',
            'transform': 'rotateX(0deg)',
            'z-index': '10'
        });
    }

    // Sobre trasladoY / carta
    if (scr >= 300) {
        E.css({
            'transition': 'all .5s 1s',
            'top': '-550px',
            'height': '600px'
        });
        P.css({
            'transition': 'all 1s',
            'transform': 'translateY(450px)'
        });
        F.css({
            'transition': 'all 1s',
            'transform': 'rotateZ(180deg)'
        });
    } else if (scr <= 300) {
        E.css({
            'transition': 'all .5s',
            'top': '3px',
            'height': '200px'
        });
        P.css({
            'transform': 'translateY(0px)'
        });
        F.css({
            'transform': 'rotateZ(0deg)'
        });
    }

 // Llamamos a la nueva función para desplazar el contenido de la carta
 desplazarContenidoCarta(scr);
});

// Nueva función para desplazar el contenido de la carta
function desplazarContenidoCarta(scrollPos) {
    var carta = $('#carta');
    var cartaContent = $('#carta p');
    var cartaHeight = carta.height();
    var contentHeight = cartaContent.height();
    var scrollRange = (contentHeight - cartaHeight) * 2; // Incrementamos el rango de desplazamiento
    var cartaFinalTop = parseInt(carta.css('top'), 10); // Convertimos el valor 'top' de la carta a número

    // Comprobamos si la carta ha alcanzado su posición final
    if (cartaFinalTop === -550 && scrollPos > 300) {
        // Activamos el desplazamiento del contenido de la carta
        var translateY = (scrollPos - 300) * -1.2; // Incrementamos la proporción del desplazamiento

        if (translateY < -scrollRange) {
            translateY = -scrollRange; // Evita que el contenido se desplace más allá del final
        }

        cartaContent.css({
            'transform': 'translateY(' + translateY + 'px)',
            'transition': 'transform 0.2s ease-out'
        });
    } else if (scrollPos <= 300) {
        cartaContent.css({
            'transform': 'translateY(0px)',
            'transition': 'transform 0.2s ease-out'
        });
    }
}