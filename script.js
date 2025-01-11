// script.js
let score = 0;
const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const popup = document.createElement('div');
popup.id = 'popup';
popup.textContent = 'I Love Youuuuuuu, hehe';
document.body.appendChild(popup);

clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;

    if (score === 50) {
        popup.style.display = 'block';
    }
});
