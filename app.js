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
    
    // Bangladeshi GK in Bangla
    'বাংলাদেশের জাতির পিতা কে?': 'বাংলাদেশের জাতির পিতা হলেন শেখ মুজিবুর রহমান।',
    'বাংলাদেশের রাজধানী কোথায়?': 'বাংলাদেশের রাজধানী হল ঢাকা।',
    'বাংলাদেশ কখন স্বাধীনতা লাভ করে?': 'বাংলাদেশ ২৬ মার্চ, ১৯৭১ সালে স্বাধীনতা লাভ করে।',
    'বাংলাদেশের প্রথম রাষ্ট্রপতি কে ছিলেন?': 'বাংলাদেশের প্রথম রাষ্ট্রপতি ছিলেন শেখ মুজিবুর রহমান।',
    'বাংলাদেশের প্রথম প্রধানমন্ত্রী কে ছিলেন?': 'বাংলাদেশের প্রথম প্রধানমন্ত্রী ছিলেন তাজউদ্দিন আহমদ।',
    'বাংলাদেশের জাতীয় ভাষা কি?': 'বাংলাদেশের জাতীয় ভাষা হল বাংলা (বাংলা)।',
    'বাংলাদেশের জাতীয় ফুল কি?': 'বাংলাদেশের জাতীয় ফুল হল শাপলা।',
    'বাংলাদেশের জাতীয় পশু কি?': 'বাংলাদেশের জাতীয় পশু হল রয়েল বেঙ্গল টাইগার।',
    'বাংলাদেশের "লাইফলাইন" কোন নদী?': 'বাংলাদেশের "লাইফলাইন" হল পদ্মা নদী।',
    'বাংলাদেশের স্বাধীনতা যুদ্ধ কে জিতেছিল?': 'বাংলাদেশ স্বাধীনতা যুদ্ধ ১৯৭১ সালে ভারতীয় সেনাবাহিনীর সহায়তায় পাকিস্তানকে পরাজিত করে জিতেছিল।',
    
    // More Bangladeshi GK (Additional Questions in Bangla)
    'বাংলাদেশের জাতীয় পতাকা কে ডিজাইন করেছিলেন?': 'বাংলাদেশের জাতীয় পতাকা ডিজাইন করেছিলেন কামরুল হাসান।',
    'বাংলাদেশের জাতীয় সঙ্গীত কি?': 'বাংলাদেশের জাতীয় সঙ্গীত হল "আমার সোনার বাংলা" যা রচনা করেছিলেন রবীন্দ্রনাথ ঠাকুর।',
    'বাংলাদেশের মুক্তিযুদ্ধের প্রথম শহীদ কে ছিলেন?': 'বাংলাদেশের মুক্তিযুদ্ধের প্রথম শহীদ হলেন রফিক উদ্দিন।',
    'বাংলাদেশের মুক্তিযুদ্ধে কতজন মুক্তিযোদ্ধা শহীদ হন?': 'বাংলাদেশের মুক্তিযুদ্ধে আনুমানিক ৩০ লক্ষ মানুষের শহীদ হওয়ার তথ্য পাওয়া যায়।',
    'বাংলাদেশের প্রধান খাদ্য কি?': 'বাংলাদেশের প্রধান খাদ্য হল ভাত এবং মাছ。',
    
    // Default response for unrecognized questions
    'default': 'Sorry, I didn\'t understand that. Can you try again?'
};

// Synonym dictionary to help recognize similar questions
const synonyms = {
    'president': ['president', 'leader', 'chief'],
    'united states': ['united states', 'usa', 'america', 'us'],
    'capital': ['capital', 'city', 'headquarters'],
    'first': ['first', 'initial'],
    'discover': ['discover', 'find', 'uncover', 'explore'],
    'world war 2': ['world war 2', 'ww2'],
    'bangladesh': ['bangladesh', 'bd'],
    'father of the nation': ['father of the nation', 'nation\'s father', 'banga bandhu'],
    'prime minister': ['prime minister', 'pm'],
    'war': ['war', 'freedom', 'independence'],
    'flower': ['flower', 'national flower'],
    'animal': ['animal', 'national animal'],
    '?': ['']
};

// Function to simulate a message
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Function to process user input and return appropriate response
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase().trim();

    // Check for synonyms in user message
    for (let key in synonyms) {
        if (synonyms[key].some(synonym => userMessage.includes(synonym))) {
            return botResponses[key] || botResponses['default'];
        }
    }

    // If no synonym match, check exact match
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
