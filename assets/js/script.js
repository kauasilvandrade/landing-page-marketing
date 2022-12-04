const btnMenu = document.getElementById('btnMenu');
const iconMenu = document.querySelector('.btnMenu__icon');
const listaMenu = document.querySelector('.navegecao__listaLinks');

// MUDOU TAMANHO DE TELA

// FUNCÃO PARA ABRIR E FECHAR MENU
function menuShow(event) {

    // MENU
    listaMenu.classList.toggle('ativado');

    // MUDAR IMAGEM AO SEU CLICADO
    if (listaMenu.classList.contains('ativado')) {

        iconMenu.src = 'assets/img/close.png';

        iconMenu.setAttribute('alt', 'imagem do botão fechar menu');

    } else {

        iconMenu.src = 'assets/img/menu.png';

        iconMenu.setAttribute('alt', 'imagem do botão abrir menu');

    }

    // ACESSIBILIDADE
    if (event.type = 'touchstart') event.preventDefault();

    const ativado = listaMenu.classList.contains('ativado');

    event.currentTarget.setAttribute('aria-expanded', ativado)

    if (ativado) {

        event.currentTarget.setAttribute('aria-label', 'botão fechar menu');

    } else {

        event.currentTarget.setAttribute('aria-label', 'botão abrir menu');

    }

}

btnMenu.addEventListener('click', menuShow);

btnMenu.addEventListener('touchstart', menuShow);