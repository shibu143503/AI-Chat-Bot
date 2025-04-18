document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const input = document.getElementById("input");
    const button = document.getElementById("btn");
    const botResponses = {

        "how do i start my course": "Just go to your Dashboard and click on your course. Then press 'Start Learning' to begin your first lesson.",
        "where do i find my lessons": "You can find all your lessons inside your course. Click the course title to see the list.",
        "can i learn at my own pace": "Absolutely! Most of our courses are self-paced, so you can learn whenever it suits you best.",
        "do i get a certificate": "Yes! When you finish the course, you’ll get a certificate you can download and share.",
        "is there a mobile app": "Yes! You can download our mobile app from the App Store or Google Play.",
        "how do i reset my password": "Click 'Forgot Password' on the login page. We’ll send a reset link to your email.",
        "can i rewatch videos": "Yes! You can rewatch videos as many times as you like.",
        "how do i contact my teacher": "Click 'Ask Instructor' in the course menu or use the discussion forum.",
        "what happens if i fail a quiz": "Most quizzes allow retries. Review the lessons and try again!",
        "how do i log out": "Click your profile icon in the top right corner and select 'Log Out'.",
        "how do i install python": "Visit python.org and download the latest version for your OS. During installation, check 'Add Python to PATH'.",
        "what is html": "HTML is the standard language for creating webpages. It structures content like text, images, and links.",
        "what is css": "CSS is used to style HTML elements—things like colors, fonts, layouts, and responsiveness.",
        "what is javascript": "JavaScript is a scripting language used to create dynamic behavior on websites like interactive forms and animations.",
        "what is an api": "An API is a set of rules that lets programs talk to each other—like how a weather app gets forecast data.",
        "what is git": "Git is a version control system that tracks changes in code and helps teams collaborate.",
        "how to push code to github": "Use: git init → git add . → git commit -m 'message' → git remote add origin <url> → git push -u origin main",
        "what is a function in javascript": "A function is a block of code that performs a task. You define it once and call it when needed.",
        "difference between let var and const": "let and const are block-scoped. Use const for constants, let for variables that change. Avoid var (function-scoped).",
        "what is responsive design": "Responsive design makes websites adjust to different screen sizes using flexible layouts and media queries.",
        "how to debug javascript": "Use console.log to trace values, check browser dev tools (F12), and isolate problems step-by-step.",
        "what is a 404 error": "It means the page you’re looking for doesn’t exist—maybe the link is broken or the page was moved.",
        "difference between == and === in javascript": "`==` compares values loosely; `===` compares both value and type (strict comparison). Prefer `===`.",
        "how to add css to html": "You can add CSS inline, in a `<style>` block, or link to a `.css` file using `<link rel='stylesheet'>`.",
        "what is dom": "The DOM (Document Object Model) represents the page structure. JavaScript can use it to update HTML dynamically.",
        "how to write a loop in javascript": "Here's a for loop: for (let i = 0; i < 5; i++) { console.log(i); }",
        "how to create an array in javascript": "Use square brackets: let fruits = ['apple', 'banana', 'cherry'];",
        "what is json": "JSON (JavaScript Object Notation) is a format for storing and sending data, often used in APIs.",
        "how to fetch data from an api": "Use fetch(): fetch('url').then(res => res.json()).then(data => console.log(data));",
        "what is an ide": "An IDE (Integrated Development Environment) is a coding workspace like VS Code, PyCharm, or WebStorm.",
        "hello": "Hi there! How can I help you today?",
        "hi": "Hey! 😊 What can I do for you?",
        "how are you": "I’m just a bot, but I’m doing great! Thanks for asking.",
        "what is your name": "You can call me your learning buddy 🤖.",
        "thank you": "You're very welcome!",
        "thanks": "Anytime! Let me know if you have more questions.",
        "bye": "Goodbye! Come back if you need anything else!",
        "goodbye": "Take care! 👋",
        "what can you do": "I can answer questions about your courses, lessons, and technical topics!",
        "tell me a joke": "Why don’t programmers like nature? It has too many bugs. 😄",
        "what time is it": "I can’t see a clock, but your device should know! ⏰",
        "help": "Sure! You can ask me about your lessons, assignments, or how to use the platform.",
        "i need help": "I'm here to help! What do you need assistance with?",
        "how do i start": "Just click on your course and hit the 'Start Lesson' button to begin.",
        "can you repeat that": "Of course! Just let me know what you want me to repeat.",
        "i’m new here": "Welcome! 🎉 Let me know if you'd like a quick guide around the platform.",
        "how does this work": "You pick a course, watch lessons, complete quizzes, and earn certificates!",
        "i like this": "That’s awesome to hear! 😊 Keep going—you’re doing great!",
        "i’m bored": "Let’s shake things up! Want to try a new quiz or watch a fun tutorial?",
        "who made you": "I was built by smart developers to help learners like you!",
        "do you have a voice": "Not yet—but I can chat all day long!",
        "are you real": "As real as code can be 😉",
        "hello": "Hello there! 👋",
        "hi": "Hi! How can I assist you today?",
        "hey": "Hey! 😊 What's up?",
        "how are you": "I'm doing great, thanks! How about you?",
        "i'm fine": "Glad to hear that! 😊",
        "i'm good": "That's awesome!",
        "i'm okay": "Good to know! I'm here if you need anything.",
        "what's your name": "You can call me ChatBuddy!",
        "who are you": "I’m your friendly assistant here to help you learn and explore!",
        "what can you do": "I can answer questions, chat with you, and help with your learning!",
        "tell me something": "Did you know? Honey never spoils. Archaeologists found 3000-year-old honey in tombs and it was still edible!",
        "what time is it": "I'm not connected to a clock, but your device should show the time. ⏰",
        "what day is it": "You can check your device calendar 📅, but every day is a great day to learn!",
        "thank you": "You're welcome! 😊",
        "thanks": "Happy to help!",
        "bye": "See you later! Take care. 👋",
        "goodbye": "Goodbye! Come back soon.",
        "are you real": "As real as code can be 😉",
        "i'm bored": "Wanna hear a fun fact or try a quiz?",
        "tell me a joke": "Why did the JavaScript developer wear glasses? Because they couldn't C# 🤓",
        "what is your purpose": "I'm here to make learning easy, fun, and helpful!",
        "do you like me": "Of course! You’re awesome 😄",
        "can you help me": "Definitely! What do you need help with?",
        "how do i use this": "Just type your questions and I’ll do my best to answer!",
        "i need a break": "Totally okay! Rest up and come back stronger 💪",
        "how old are you": "I was born in code just recently!",
        "where are you from": "I'm from the cloud ☁️",
        "you're funny": "Haha, I try! 😄",
        "this is cool": "Right?! I’m glad you think so.",
        "i'm tired": "Maybe a short break or some water will help. You're doing great!",
        "what are you doing": "Just waiting for your next awesome message 😎",
        "how's your day": "It’s been great chatting with you!",
        "i like you": "Aww, I like you too 🧡",
        "can we be friends": "We already are! 😊",
        "how do i login": "To log in, click the 'Login' button on the top right and enter your email and password.",
        "i forgot my password": "No worries! Click on 'Forgot Password' on the login screen and follow the instructions to reset it.",
        "how to reset my password": "You can reset it by clicking 'Forgot Password'. We'll email you a reset link.",
        "how do i create an account": "Just click on 'Sign Up' or 'Register', fill in your details, and you’re good to go!",
        "i didn't get the verification email": "Check your spam folder first. If it’s not there, click 'Resend Email' on the login page.",
        "my account is locked": "That can happen after too many failed logins. Please wait 15 minutes or contact support for help.",
        "how can i change my email": "After logging in, go to your profile settings and update your email.",
        "i can't login": "Can you tell me what error you’re seeing? I can help troubleshoot!",
        "what is my username": "Your username is usually your email address unless you set a custom one.",
        "can i use google to login": "Yes! Just click on the 'Sign in with Google' option on the login screen.",
        "do i need to login to access content": "Most content requires login so we can track your progress and certificates.",
        "can i stay logged in": "Yes, you can check 'Remember me' when logging in to stay logged in.",
        "how do i logout": "Click your profile picture or name in the top menu, then select 'Logout'.",
        "login help": "Sure! What exactly are you stuck on—password, username, or something else?",
        "how do i reset my password": "To reset your password, click on 'Forgot Password' on the login page, and we'll send you a reset link.",
        "i forgot my password": "No problem! Just click 'Forgot Password' and follow the instructions to recover your account.",
        "how to change my password": "After logging in, go to your account settings and choose 'Change Password'.",
        "password reset link not working": "Make sure to check your spam folder. If it’s still not working, try requesting a new link.",
        "how long does it take to reset my password": "Password reset links are sent instantly, but check your inbox/spam folder just in case.",
        "i can't remember my password": "If you can’t remember your password, click on 'Forgot Password' to reset it.",
        "how do i recover my password": "Click 'Forgot Password' and follow the steps to recover your account using your email address.",
        "how to make a strong password": "A strong password includes a mix of uppercase, lowercase letters, numbers, and special characters (e.g., @, $, !).",
        "what is a secure password": "A secure password is at least 8 characters long and combines letters, numbers, and symbols.",
        "can i use the same password everywhere": "It's better to have unique passwords for each site. Consider using a password manager to keep track of them.",
        "can i change my email address": "Yes, after logging in, go to your account settings and update your email address.",
        "how do i recover my account": "Click 'Forgot Password', enter your email, and follow the instructions to recover your account.",
        "i can't log in": "Make sure you're entering the correct username and password. If you're still having trouble, try resetting your password.",
        "how do i unlock my account": "If your account is locked, try waiting 15 minutes or contact support for further assistance.",
        "why is my account locked": "Your account may be locked due to multiple failed login attempts. Try again after some time, or reset your password.",
        "password change confirmation": "If you’ve successfully changed your password, you’ll receive a confirmation email.",
        "how to remember my password": "Use a password manager or write it down securely somewhere safe. Avoid using the same password for different accounts.",
        "why is my password not working": "Double-check your caps lock and make sure you’re entering the correct password. If needed, reset it.",
        "what should i do if someone knows my password": "Immediately change your password and enable two-factor authentication if possible.",
        default: "Iam not sure I understand. Can you try asking Something else?"
    };
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(isUser ? "user-message" : "bot-message");
        const messageText = document.createElement("p");
        messageText.textContent = message;
        messageDiv.appendChild(messageText);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        for (const [key, value] of Object.entries(botResponses)) {
            if (lowerMessage.includes(key)) {
                return value;
            }
        }
        return botResponses.default;
    }
//summa//
    function sendMessage(){
        const message=input.value.trim();
        if(message){
            addMessage(message,true);
            input.value="";

            setTimeout(()=>{
                const botResponses=getBotResponse(message);
                addMessage(botResponses);
            },500);
        }
    }
    button.addEventListener("click",sendMessage);
    input.addEventListener("keypress",(e)=>{
        if(e.key ==="Enter"){
            sendMessage();
        }
    })
});