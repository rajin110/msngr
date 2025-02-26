// app.js

const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messagesContainer = document.getElementById('messages');

// Simulated bot responses with GK info
const botResponses = {
    'hello': 'Hi! How can I assist you today?',
    'how are you': 'I\'m doing great, thank you for asking!',
    'bye': 'Goodbye! Have a nice day!',
    'tashrif who?': 'Tashrif Rajin is the creator of me.',
    'who is the creator of you?': 'Tashrif Shahrear is the creator of me.',
    
    // History
    'who was the first president of the united states?': 'George Washington was the first president of the United States.',
    'when did world war 2 end?': 'World War 2 ended on September 2, 1945.',
    'who discovered america?': 'Christopher Columbus is credited with discovering America in 1492.',
    
    // Geography
    'what is the capital of france?': 'The capital of France is Paris.',
    'what is the largest country in the world?': 'Russia is the largest country in the world by land area.',
    'which is the longest river in the world?': 'The Nile River is traditionally considered the longest river in the world.',
    
    // Science
    'what is the chemical symbol for water?': 'The chemical symbol for water is H2O.',
    'who developed the theory of relativity?': 'Albert Einstein developed the theory of relativity.',
    'what is the speed of light?': 'The speed of light in a vacuum is approximately 299,792 kilometers per second.',
    
    // Famous Personalities
    'who is the president of the united states?': 'As of 2021, Joe Biden is the president of the United States.',
    'who is the founder of microsoft?': 'Bill Gates co-founded Microsoft.',
    'who was the first woman to fly solo across the atlantic ocean?': 'Amelia Earhart was the first woman to fly solo across the Atlantic Ocean.',
    
    // Sports
    'who won the fifa world cup in 2018?': 'France won the FIFA World Cup in 2018.',
    'who holds the record for the most olympic gold medals?': 'Michael Phelps holds the record for the most Olympic gold medals with 23.',
    'what sport is known as "the king of sports"?': 'Soccer (Football) is known as "the king of sports".',

    // Literature
    'who wrote "romeo and juliet"?': 'William Shakespeare wrote "Romeo and Juliet".',
    'what is the longest novel ever written?': 'The longest novel ever written is "In Search of Lost Time" by Marcel Proust.',
    'who is the author of "harry potter"?': 'J.K. Rowling is the author of the "Harry Potter" series.',
    
    // Space
    'what is the nearest planet to the sun?': 'Mercury is the closest planet to the Sun.',
    'how many moons does earth have?': 'Earth has one natural moon, known as "the Moon".',
    'who was the first person to walk on the moon?': 'Neil Armstrong was the first person to walk on the Moon, on July 20, 1969.',
    
    // Technology
    'what does "www" stand for?': 'WWW stands for World Wide Web.',
    'who invented the telephone?': 'Alexander Graham Bell is credited with inventing the telephone.',
    'what is the most popular social media platform in 2021?': 'As of 2021, Facebook is the most popular social media platform.',
    
    // Default response for unrecognized questions
    'default': 'Sorry, I didn\'t understand that. Can you try again?'
};

// Synonym handling function for similar questions
const similarQuestions = {
    'who is the president of the united states?': [
        'who is the president of america?',
        'who is the us president?',
        'who is the president of usa?'
    ],
    'what is the capital of france?': [
        'where is the capital of france?',
        'paris is the capital of which country?',
        'what is the capital city of france?'
    ],
    'who was the first president of the united states?': [
        'who was america\'s first president?',
        'who was the first president of america?'
    ],
    'who discovered america?': [
        'who found america?',
        'who is credited with discovering america?',
        'who discovered the americas?'
    ],
    // Add more patterns for other responses
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
    
    // Check if the user message matches any similar questions
    for (const [key, variations] of Object.entries(similarQuestions)) {
        if (variations.some(variant => userMessage.includes(variant))) {
            return botResponses[key] || botResponses['default'];
        }
    }

    // If no similar questions match, use the exact match approach
    return botResponses[userMessage] || botResponses['default'];
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
