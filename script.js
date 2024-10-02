// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const texts = document.getElementsByClassName("mensagem2");
    const changeTextBtn = document.getElementById("btn-mudar-frases");

    const novasFrases = [
        "Além de não ser fácil, ainda é difícil!!",
        "Por que a matemática está triste? Porque tem seus problemas e nunca consegue resolvê-los.",
        "Por que a plantinha não foi ao hospital? Porque só tinha médico de plantão."
    ];

    changeTextBtn.addEventListener("click", function () {
        for (let i = 0; i < texts.length; i++) {
            // Altera a frase usando um laço
            texts[i].textContent = novasFrases[i]; // Atribui a nova frase correspondente
        }
    });
});