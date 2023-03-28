    // Acessa o botão e o input do HTML
    const button = document.querySelector("button");
    const input = document.querySelector("input[type='text']");

    // Adiciona um evento de clique no botão
    button.addEventListener("click", () => {
    // Verifica se o valor do input é uma string vazia
    if (input.value.trim() === "") {
        // Exibe um alerta com a mensagem "Campo em branco!"
        alert("Campo em branco!");
        return;
    }

    // Acessa a ul onde as mensagens são exibidas
    const messages = document.querySelector(".messages");

    // Cria um novo li com a mensagem enviada
    const newMessage = document.createElement("li");
    newMessage.classList.add("message", "outgoing");

    // Cria a div que contém a mensagem
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("text");
    messageDiv.textContent = input.value;

    // Adiciona a div à mensagem
    newMessage.appendChild(messageDiv);

    // Adiciona a nova mensagem à ul
    messages.appendChild(newMessage);

    // Limpa o valor do input
    input.value = "";
    });

    // Adiciona um evento de pressionar tecla no input
    input.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            button.click();
        }
    });

    // Adiciona um evento de clique no botão "Limpar"
    const limparButton = document.querySelector("#limpar");

    limparButton.addEventListener("click", () => {
        const messages = document.querySelector(".messages");
        messages.innerHTML = "";
    });
