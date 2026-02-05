// Mensagem no console para confirmar que o JavaScript está carregando
console.log("JavaScript funcionando!");

// Seleciona o título principal (h1)
const titulo = document.querySelector("h1");

// Evento de clique no título
// Alterna a classe CSS que muda a aparência do título
titulo.addEventListener("click", () => {
  titulo.classList.toggle("titulo-ativo");
});

// ===== CONTROLE DE SUBMENUS =====

// seleciona TODOS os links (<a>) que estão dentro do menu <nav>
const linksMenu = document.querySelectorAll("nav a");

// percorre cada link do menu, um por um
linksMenu.forEach(link => {

  // adiciona um evento de clique em cada link
  link.addEventListener("click", (e) => {

    // impede o comportamento padrão do <a href="#">
    // sem isso a página sobe ou recarrega
    e.preventDefault();

    // pega o elemento que vem LOGO DEPOIS do link
    // no caso o HTML, isso é o <ul class="submenu">
    const submenuAtual = link.nextElementSibling;

    // verifica se o submenu clicado estava aberto
    const estavaAberto =
      submenuAtual &&
      submenuAtual.classList.contains("submenu") &&
      !submenuAtual.classList.contains("escondido");

    // seleciona TODOS os submenus da página
    document.querySelectorAll(".submenu").forEach(sub => {

      // adiciona a classe "escondido" em todos
      // isso garante que todos fiquem fechados
      sub.classList.add("escondido");
    });

    // verifica se:
    // existe um submenu depois do link
    // esse elemento realmente é um submenu
    
    if (submenuAtual && submenuAtual.classList.contains("submenu")&& !estavaAberto) {

      // abre o submenu clicado
      // (remove "escondido" se estiver fechado)
      submenuAtual.classList.remove("escondido");
    }
  });

});

// ===== BOTÃO "MOSTRAR MAIS" =====

// seleciona o botão
const btnSobre = document.querySelector("#btn-sobre");

// seleciona o texto escondido
const textoExtra = document.querySelector("#texto-extra");

// adiciona evento de clique no botão
btnSobre.addEventListener("click", () => {

  // alterna a classe "escondido"
  textoExtra.classList.toggle("escondido");

  // muda o texto do botão conforme o estado
  if (textoExtra.classList.contains("escondido")) {
    btnSobre.textContent = "Mostrar mais";
  } else {
    btnSobre.textContent = "Mostrar menos";
  }
});