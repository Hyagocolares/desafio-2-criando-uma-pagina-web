document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão de login
    var loginButton = document.querySelector('#myNav .icons-light a');

    // Adicione um evento de clique ao botão de login
    loginButton.addEventListener('click', function(event) {
        // Evite que o link padrão seja seguido
        event.preventDefault();
        
        // Coloque aqui o código que deseja executar ao clicar no botão de login
        alert('Logado!/Registrado!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão de login
    var loginButton = document.querySelector('#myCarousel .container-carousel-left button');

    // Adicione um evento de clique ao botão de login
    loginButton.addEventListener('click', function(event) {
        // Evite que o link padrão seja seguido
        event.preventDefault();
        
        // Coloque aqui o código que deseja executar ao clicar no botão de login
        alert('Voce será redirecionado!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão de login
    var loginButton = document.querySelector('#myCarousel2 .container-carousel-left button');

    // Adicione um evento de clique ao botão de login
    loginButton.addEventListener('click', function(event) {
        // Evite que o link padrão seja seguido
        event.preventDefault();
        
        // Coloque aqui o código que deseja executar ao clicar no botão de login
        alert('Voce será redirecionado!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão de login
    var loginButton = document.querySelector('#myContainerFluid button');

    // Adicione um evento de clique ao botão de login
    loginButton.addEventListener('click', function(event) {
        // Evite que o link padrão seja seguido
        event.preventDefault();
        
        // Coloque aqui o código que deseja executar ao clicar no botão de login
        alert('Comprando!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão de login
    var loginButton = document.querySelector('#myContainerFluid .right');

    // Adicione um evento de clique ao botão de login
    loginButton.addEventListener('click', function(event) {
        // Evite que o link padrão seja seguido
        event.preventDefault();
        
        // Coloque aqui o código que deseja executar ao clicar no botão de login
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

