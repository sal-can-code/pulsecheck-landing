const teaser = document.getElementById('feedback-teaser');
const openBtn = document.getElementById('open-widget-btn');
const widgetContent = document.getElementById('widget-content');
const emojiBtns = document.querySelectorAll('.emoji-btn');
const responseDiv = document.getElementById('feedback-response');
const responseMsg = document.getElementById('response-msg');
const emojiRow = document.querySelector('.emoji-row');

let hasEngaged = false;
let firstTriggerHit = false;

// 1. SCROLL & TIME LOGIC
window.addEventListener('scroll', () => {
  if (hasEngaged || firstTriggerHit) return;

  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  if (scrollPercent > 60) {
    firstTriggerHit = true;
    teaser.classList.add('active');

    // Hide after 4s, then nudge again after 8s
    setTimeout(() => {
      if (!hasEngaged) {
        teaser.classList.remove('active');
        
        setTimeout(() => {
          if (!hasEngaged) teaser.classList.add('active');
        }, 8000); 
      }
    }, 4000);
  }
});

// 2. TEASER INTERACTION
openBtn.addEventListener('click', () => {
  hasEngaged = true;
  teaser.classList.remove('active');
  teaser.style.display = 'none';
  widgetContent.classList.remove('content-hidden');
});

// 3. EMOJI FEEDBACK & CONFETTI
emojiBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Fire Confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#818cf8', '#ffffff']
    });

    const type = btn.getAttribute('data-type');
    const messages = {
      love: "Awesome! Glad you're liking it. 🚀",
      neutral: "Thanks for the feedback! 👍",
      confused: "Oh no! What's confusing? We're on it. 🛠️"
    };

    responseMsg.innerText = messages[type] || messages.neutral;
    emojiRow.classList.add('hidden');
    responseDiv.classList.remove('hidden');

    setTimeout(() => {
      widgetContent.classList.add('content-hidden');
    }, 2500);
  });
});