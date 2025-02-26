// app.js

const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messagesContainer = document.getElementById('messages');

// Simulated bot responses
const botResponses = {
    'hello': 'Hi! How can I assist you today?',
    'how are you': 'Im doing great, thank you for asking!',
    'bye': 'Goodbye! Have a nice day!',
    'tashrif who?': 'Tashrif Rajin is the creator of me'
};

// Function to simulate a message
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Function to get bot response based on user input
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase().trim();
    return botResponses[userMessage] || botResponses["default"];
}

// Function to handle user input and bot response
function handleUserInput() {
    const userMessage = userInput.value;
    if (userMessage.trim()) {
        // Display user message
        appendMessage(userMessage, 'user');

        // Get bot response
        const botMessage = getBotResponse(userMessage);
        
        // Display bot message
        setTimeout(() => {
            appendMessage(botMessage, 'bot');
        }, 500);

        // Clear input field
        userInput.value = '';
    }
}

// Event listener for sending a message when the button is clicked
sendButton.addEventListener('click', handleUserInput);

// Event listener for sending a message when 'Enter' is pressed
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
