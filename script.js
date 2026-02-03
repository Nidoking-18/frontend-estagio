console.log("JavaScript funcionando!");

const titulo = document.querySelector("h1");


titulo.addEventListener("click", () => {
  titulo.classList.toggle("titulo-ativo");
});

const botao = document.querySelector("#btn-sobre");
const textoExtra = document.querySelector("#texto-extra");

botao.addEventListener("click", () => {
  textoExtra.classList.toggle("escondido");

  if (textoExtra.classList.contains("escondido")) {
    botao.innerText = "Mostrar";
  } else {
    botao.innerText = "Esconder";
  }
});