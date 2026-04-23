// 1. Seleciona o formulário e o campo de erro
const formulario = document.getElementById("meuFormulario");
const campoErro = document.getElementById("erro");

// 2. Adiciona o "ouvinte" de eventos para o envio (submit)
formulario.addEventListener("submit", function(event) {
    
    // Limpa mensagens de erro anteriores
    campoErro.textContent = "";

    // 3. Pega os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    // 4. Validações
    let mensagem = "";

    if (nome === "") {
        mensagem = "O nome não pode estar vazio.";
    } else if (!email.includes("@")) {
        mensagem = "E-mail inválido (deve conter @).";
    } else if (idade <= 0) {
        mensagem = "A idade deve ser maior que 0.";
    }

    // 5. Se houver mensagem de erro, impede o envio
    if (mensagem !== "") {
        event.preventDefault(); // Impede o formulário de ser enviado/recarregar
        campoErro.textContent = mensagem; // Exibe o erro na tela
    } else {
        alert("Formulário enviado com sucesso!");
    }
});