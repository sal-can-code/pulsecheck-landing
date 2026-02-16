const trigger = document.getElementById('widget-trigger');
const content = document.getElementById('widget-content');
const emojiBtns = document.querySelectorAll('.emoji-btn');
const responseDiv = document.getElementById('feedback-response');
const responseMsg = document.getElementById('response-msg');

// 1. Toggle the widget open/close
trigger.addEventListener('click', () => {
  content.classList.toggle('content-hidden');
});

// 2. Handle Emoji Clicks
emojiBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-type');
    
    // The "Product Engineer" logic:
    if (type === 'confused') {
      responseMsg.innerText = "Oh no! What's confusing? We're on it. 🛠️";
    } else if (type === 'love') {
      responseMsg.innerText = "Awesome! Glad you're liking it. 🚀";
    } else {
      responseMsg.innerText = "Thanks for the feedback! 👍";
    }

    // Show response, hide emojis
    document.querySelector('.emoji-row').classList.add('hidden');
    responseDiv.classList.remove('hidden');
  });
});
