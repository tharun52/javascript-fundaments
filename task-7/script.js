window.onload = function() {
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    let chatBox = document.getElementById("chat-box");

    chatHistory.forEach(msg => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", msg.className);
        messageDiv.textContent = msg.text;
        chatBox.appendChild(messageDiv);
    });

    scrollToBottom();
};

document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        alert("Enter a message");
        return; 
    }

    let chatBox = document.getElementById("chat-box");

    let timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "user-message");
    messageDiv.textContent = `You (${timestamp}): ${userInput}`;
    chatBox.appendChild(messageDiv);

    saveMessage(`You (${timestamp}): ${userInput}`, "user-message");

    document.getElementById("user-input").value = ""; // Clear input
    scrollToBottom();
    botReply(); 
});

function scrollToBottom() {
    let chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply() {
    let chatBox = document.getElementById("chat-box");

    let typingIndicator = document.createElement("div");
    typingIndicator.classList.add("message", "bot-message");
    typingIndicator.textContent = "Bot is typing...";
    chatBox.appendChild(typingIndicator);
    scrollToBottom();
    
    let responses = [
        "Hello! How can I help?",
        "That sounds interesting!",
        "Tell me more!",
        "I'm just a bot, but I'm here to chat!",
        "Nice talking to you!"
    ];
    let randomResponse = responses[Math.floor(Math.random() * responses.length)];

    setTimeout(() => {
        chatBox.removeChild(typingIndicator);

        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        let timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        botMessage.textContent = `Bot (${timestamp}): ${randomResponse}`;
        chatBox.appendChild(botMessage);
        saveMessage(`Bot (${timestamp}): ${randomResponse}`, "bot-message");
        scrollToBottom();
    }, 1500); // Simulates a delay of 0.5 second
}

document.getElementById("clear-chat").addEventListener("click", function() {
    localStorage.removeItem("chatHistory"); // Clear saved chat history
    document.getElementById("chat-box").innerHTML = ""; // Clear chat UI
});

function saveMessage(text, className) {
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    chatHistory.push({ text, className });
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
}
    