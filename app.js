// Elements
const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');

// Send message function
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        // Create the user's message element
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = messageText;
        chatBox.appendChild(userMessage);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the input field after sending
        messageInput.value = '';

        // Simulate the other user replying after a short delay
        setTimeout(() => {
            const replyMessage = document.createElement('div');
            replyMessage.classList.add('message', 'reply-message');
            replyMessage.textContent = `Reply: ${messageText}`;
            chatBox.appendChild(replyMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}

// Send message when clicking the send button
sendButton.addEventListener('click', sendMessage);

// Send message when pressing Enter key
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
