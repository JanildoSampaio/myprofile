// Função para scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


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


const projetos = [
    {
      id: 1,
      titulo: "Projeto 1",
      descricao: "Descrição detalhada do Projeto 1.",
      repoLink: "https://github.com/seu-usuario/projeto1",
      siteLink: "https://seu-projeto1.com"
    },
    {
      id: 2,
      titulo: "Projeto 2",
      descricao: "Descrição detalhada do Projeto 2.",
      repoLink: "https://github.com/seu-usuario/projeto2",
      siteLink: "https://seu-projeto2.com"
    },
  
  ];
  
  // Função para abrir o modal de projeto
  function abrirModalProjeto(id) {
    const projeto = projetos.find(p => p.id === id);
    const modal = document.getElementById("projetoModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const repoLink = document.getElementById("repoLink");
    const siteLink = document.getElementById("siteLink");
  
    title.textContent = projeto.titulo;
    description.textContent = projeto.descricao;
    repoLink.href = projeto.repoLink;
    siteLink.href = projeto.siteLink;
  
    modal.style.display = "block";
  }
  
  // Função para fechar os modais
  function fecharModal() {
    document.getElementById("projetoModal").style.display = "none";
    document.getElementById("contatoModal").style.display = "none";
  }
  
  // Função para abrir o modal de contato
  function abrirModalContato() {
    document.getElementById("contatoModal").style.display = "block";
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", function() {
    // Botões "Saiba Mais"
    const botoesSaibaMais = document.querySelectorAll(".btn-saiba-mais");
    botoesSaibaMais.forEach((botao, index) => {
      botao.addEventListener("click", (e) => {
        e.preventDefault();
        abrirModalProjeto(index + 1);
      });
    });
  
    // Botão de contato
    const botaoContato = document.querySelector(".contact-btn");
    botaoContato.addEventListener("click", abrirModalContato);
  
    // Fechar modais
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(button => {
      button.addEventListener("click", fecharModal);
    });
  
    // Fechar modal clicando fora
    window.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal")) {
        fecharModal();
      }
    });
  
    // Envio do formulário de contato
    const contatoForm = document.getElementById("contatoForm");
    contatoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Aqui você pode adicionar lógica para enviar o formulário
      alert("Mensagem enviada com sucesso!");
      fecharModal();
    });
  });