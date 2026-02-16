// ELEMENTS
const teaser = document.getElementById('feedback-teaser');
const openBtn = document.getElementById('open-widget-btn');
const widgetContent = document.getElementById('widget-content');
const emojiBtns = document.querySelectorAll('.emoji-btn');
const responseDiv = document.getElementById('feedback-response');
const responseMsg = document.getElementById('response-msg');
const emojiRow = document.querySelector('.emoji-row');
const heroForm = document.querySelector('.hero-form');
const emailDisplay = document.getElementById('user-email-display');

let hasEngaged = false;
let firstTriggerHit = false;

// 1. LANDING PAGE: FEEDBACK LOGIC
if (teaser) {
    window.addEventListener('scroll', () => {
        if (hasEngaged || firstTriggerHit) return;
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercent > 60) {
            firstTriggerHit = true;
            teaser.classList.add('active');
            setTimeout(() => {
                if (!hasEngaged) {
                    teaser.classList.remove('active');
                    setTimeout(() => { if (!hasEngaged) teaser.classList.add('active'); }, 8000);
                }
            }, 4000);
        }
    });

    openBtn.addEventListener('click', () => {
        hasEngaged = true;
        teaser.classList.remove('active');
        teaser.style.display = 'none';
        widgetContent.classList.remove('content-hidden');
    });

    emojiBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
            }
            const messages = {
                love: "Awesome! Glad you're liking it. 🚀",
                neutral: "Thanks for the feedback! 👍",
                confused: "Oh no! We're on it. 🛠️"
            };
            responseMsg.innerText = messages[btn.dataset.type] || "Thanks!";
            emojiRow.classList.add('hidden');
            responseDiv.classList.remove('hidden');
            setTimeout(() => { widgetContent.classList.add('content-hidden'); }, 2500);
        });
    });
}

// 2. LANDING PAGE: FORM SUBMISSION
if (heroForm) {
    heroForm.addEventListener('submit', () => {
        const emailInput = heroForm.querySelector('input[type="email"]').value;
        localStorage.setItem('userEmail', emailInput);
    });
}

// 3. SETUP PAGE: DISPLAY EMAIL
if (emailDisplay) {
    emailDisplay.innerText = localStorage.getItem('userEmail') || 'your email';
}