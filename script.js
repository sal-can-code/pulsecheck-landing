// DOM Elements
const teaser = document.getElementById('feedback-teaser');
const openBtn = document.getElementById('open-widget-btn');
const widgetContent = document.getElementById('widget-content');
const emojiBtns = document.querySelectorAll('.emoji-btn');
const responseDiv = document.getElementById('feedback-response');
const responseMsg = document.getElementById('response-msg');
const emojiRow = document.querySelector('.emoji-row');

// 1. Scroll Trigger (Shows Teaser after 30% scroll)
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  if (scrollPercent > 30) {
    teaser.classList.add('active');
  }
});

// 2. Teaser "Sure!" button logic
openBtn.addEventListener('click', () => {
  teaser.classList.remove('active');
  widgetContent.classList.remove('content-hidden');
});

// 3. Handle Emoji Clicks
emojiBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-type');
    
    // Product Logic for responses
    const messages = {
      confused: "Oh no! What's confusing? We're on it. 🛠️",
      love: "Awesome! Glad you're liking it. 🚀",
      neutral: "Thanks for the feedback! 👍"
    };

    responseMsg.innerText = messages[type] || messages.neutral;

    // UI State Change
    emojiRow.classList.add('hidden');
    responseDiv.classList.remove('hidden');

    // Auto-close widget after 2 seconds
    setTimeout(() => {
      widgetContent.classList.add('content-hidden');
    }, 2000);
  });
});