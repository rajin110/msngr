document.getElementById("sendButton").addEventListener("click", sendMessage);

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");

    const messageText = messageInput.value.trim();
    if (messageText) {
        const message = document.createElement("div");
        message.classList.add("message", "user-message");
        message.textContent = messageText;
        
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;

        messageInput.value = "";
        messageInput.focus();
    }
}
