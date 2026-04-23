// 1. Inicializa a variável do contador
let contador = 0;

// 2. Seleciona os elementos
const display = document.getElementById("numero");
const btnInc = document.getElementById("btnIncrementar");
const btnDec = document.getElementById("btnDecrementar");
const btnZer = document.getElementById("btnZerar");

// 3. Função para atualizar a tela e a cor (Bônus)
function atualizarTela() {
    display.textContent = contador;

    if (contador > 0) {
        display.className = "positivo";
    } else if (contador < 0) {
        display.className = "negativo";
    } else {
        display.className = ""; // Preto quando for zero
    }
}

// 4. Adiciona os eventos de clique
btnInc.addEventListener("click", () => {
    contador++;
    atualizarTela();
});

btnDec.addEventListener("click", () => {
    contador--;
    atualizarTela();
});

btnZer.addEventListener("click", () => {
    contador = 0;
    atualizarTela();
});