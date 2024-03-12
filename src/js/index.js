document.addEventListener('DOMContentLoaded', function() {

    var loginButton = document.querySelector('#myNav .icons-light a');

    loginButton.addEventListener('click', function(event) {

        event.preventDefault();
        
        alert('Logado!/Registrado!');
    });
});

document.addEventListener('DOMContentLoaded', function() {

    var loginButton = document.querySelector('#myCarousel .container-carousel-left button');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        alert('Voce será redirecionado!');
    });
});

document.addEventListener('DOMContentLoaded', function() {

    var loginButton = document.querySelector('#myCarousel2 .container-carousel-left button');

    loginButton.addEventListener('click', function(event) {

        event.preventDefault();
        
        alert('Voce será redirecionado!');
    });
});

document.addEventListener('DOMContentLoaded', function() {

    var loginButton = document.querySelector('#myContainerFluid button');

    loginButton.addEventListener('click', function(event) {

        event.preventDefault();
        
        alert('Comprando!');
    });
});

document.addEventListener('DOMContentLoaded', function() {

    var loginButton = document.querySelector('#myContainerFluid .right');

    loginButton.addEventListener('click', function(event) {

        event.preventDefault();
        
        alert('Boa leitura!');
    });
});


const elementos = document.querySelectorAll('#myFooter .form button');

elementos.forEach(elemento => {

    elemento.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    });

    elemento.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});

const imagem1 = document.querySelectorAll('#myNav .icons-light a img');

imagem1.forEach(imagem => {

    imagem.addEventListener('mouseover', function() {
        this.style.transition = 'transform 0.3s';
        this.style.transform = 'scale(1.3)';
    });

    imagem.addEventListener('mouseout', function() {
        this.style.transition = 'transform 0.3s';
        this.style.transform = 'scale(1)';
    });
});

const imagem = document.querySelector('#myFooter img');

imagem.addEventListener('mouseover', function() {
    this.style.transition = 'transform 0.3s';
    this.style.transform = 'scale(1.3)';
});

imagem.addEventListener('mouseout', function() {
    this.style.transition = 'transform 0.3s';
    this.style.transform = 'scale(1)';
});

const imagens = document.querySelectorAll('#myFooter figure img');

imagens.forEach(imagem => {
    imagem.addEventListener('mouseover', function() {
        this.style.transition = 'transform 0.3s';
        this.style.transform = 'scale(1.3)';
    });

    imagem.addEventListener('mouseout', function() {
        this.style.transition = 'transform 0.3s';
        this.style.transform = 'scale(1)';
    });
});

