const btnMenu = document.getElementById('btn-mobile');


function toggleMenu(event) {
    // Verifica se o click partiu de um mobile
    if (event.type === 'touchstart') {
        event.preventDefault();
    }
    // Adicionando e Removendo Classe 'active'
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    // Acessibilidade
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }    
}   

// Obeservendo o click do mouse ou touch
btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);


