// Simulated private chat system with one sender and one receiver
const sendButton = document.getElementById("sendButton");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");
const logoutButton = document.getElementById("logoutButton");

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        // Add the user's message
        appendMessage(messageText, "user-message");

        // Simulate reply after a delay (to simulate a response from the other user)
        setTimeout(() => {
            const replyText = "Reply from User2: " + messageText;
            appendMessage(replyText, "reply-message");
        }, 1000);

        // Clear input field after sending
        messageInput.value = "";
        messageInput.focus();
    }
}

function appendMessage(messageText, messageType) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", messageType);
    messageDiv.textContent = messageText;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

// Simulated logout function (just resets the chat)
logoutButton.addEventListener("click", function() {
    if (confirm("Are you sure you want to logout?")) {
        chatBox.innerHTML = ""; // Clear chat messages
        alert("You have logged out.");
    }
});
