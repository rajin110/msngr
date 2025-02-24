const joinBtn = document.getElementById('joinBtn');
const sendBtn = document.getElementById('sendBtn');
const logoutBtn = document.getElementById('logoutBtn');
const messageInput = document.getElementById('message');
const messagesDiv = document.getElementById('messages');
const roomNameSpan = document.getElementById('room-name');
const loginSection = document.getElementById('login-section');
const chatSection = document.getElementById('chat-section');
const roomInput = document.getElementById('room');
const passwordInput = document.getElementById('password');

// Sample hardcoded room and password
const rooms = {
  "room1": "password123",
  "room2": "secretpass"
};

// Function to handle joining a room
function joinRoom() {
  const room = roomInput.value;
  const password = passwordInput.value;
  
  // Check if the room exists and the password matches
  if (rooms[room] && rooms[room] === password) {
    localStorage.setItem('room', room);
    localStorage.setItem('password', password);
    loginSection.style.display = 'none';
    chatSection.style.display = 'block';
    roomNameSpan.textContent = room;
    loadMessages(room);
  } else {
    alert("Invalid room or password.");
  }
}

// Function to load messages from localStorage (this is basic; in production, use a server)
function loadMessages(room) {
  const storedMessages = JSON.parse(localStorage.getItem(room)) || [];
  messagesDiv.innerHTML = storedMessages.map(msg => 
    `<div class="message">${msg}</div>`
  ).join('');
}

// Function to send a message
function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    const room = localStorage.getItem('room');
    const storedMessages = JSON.parse(localStorage.getItem(room)) || [];
    storedMessages.push(message);
    localStorage.setItem(room, JSON.stringify(storedMessages));
    messageInput.value = '';
    loadMessages(room);
  }
}

// Function to logout
function logout() {
  localStorage.removeItem('room');
  localStorage.removeItem('password');
  loginSection.style.display = 'block';
  chatSection.style.display = 'none';
}

// Event Listeners
joinBtn.addEventListener('click', joinRoom);
sendBtn.addEventListener('click', sendMessage);
logoutBtn.addEventListener('click', logout);

// Auto login if room and password are stored in localStorage
if (localStorage.getItem('room') && localStorage.getItem('password')) {
  loginSection.style.display = 'none';
  chatSection.style.display = 'block';
  roomNameSpan.textContent = localStorage.getItem('room');
  loadMessages(localStorage.getItem('room'));
}
