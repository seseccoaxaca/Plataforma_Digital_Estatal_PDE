// Función para abrir el chat
function openChat() {
    document.getElementById("chatPopup").style.display = "block";
}

// Función para cerrar el chat
function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
}

// Agregar evento click al botón flotante
document.getElementById("chatButton").addEventListener("click", openChat);

// Agregar evento click al botón de cerrar el chat
document.getElementById("closeChat").addEventListener("click", closeChat);
document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.querySelector(".chat-container");
    const toggleChatButton = document.getElementById("toggleChat");
    const chatBody = document.getElementById("chatBody");
    const userInput = document.getElementById("userInput");
    const sendMessageButton = document.getElementById("sendMessage");

    // Mostrar u ocultar el chatbot al hacer clic en el botón flotante
    toggleChatButton.addEventListener("click", function () {
        chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
    });

    // Función para agregar un mensaje del usuario al chat
    function addUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.innerText = message;
        chatBody.appendChild(userMessage);
        userInput.value = "";
    }

    // Función para agregar una respuesta del chatbot al chat
    function addChatbotMessage(message) {
        const chatbotMessage = document.createElement("div");
        chatbotMessage.className = "chatbot-message";
        chatbotMessage.innerText = message;
        chatBody.appendChild(chatbotMessage);
    }

    // Manejar el envío de mensajes
    sendMessageButton.addEventListener("click", function () {
        const message = userInput.value;
        if (message.trim() !== "") {
            addUserMessage(message);
            // Aquí puedes agregar la lógica para obtener la respuesta del chatbot y mostrarla.
            // Por ejemplo, puedes llamar a una función que procese la respuesta del chatbot.
            // Luego, agrega la respuesta llamando a addChatbotMessage(response).
        }
    });
});
