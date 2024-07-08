// Este arquivo está vazio por enquanto, mas você pode adicionar
// funcionalidades JavaScript aqui conforme necessário.

// Por exemplo:
// Função para scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Adicione este código ao seu arquivo script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });
});