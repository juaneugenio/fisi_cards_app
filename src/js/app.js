import { flashcardsData } from './data/flashcards.js';
import { whitelist } from './data/whitelist.js';

const topicsNav = document.getElementById('topics-nav');
const flashcardsContainer = document.getElementById('flashcards-container');

// === Session lasts 12 hours (in ms), after that user must log in again ===
const SESSION_LENGTH = 12 * 60 * 60 * 1000; // 12 hours

// === FUNCTION: Log in Form ===
function showLoginForm() {
  document.body.innerHTML = `
    <div class="container">
      <h2 style="color: #dec5c5ff;">Restricted Acces</h2>
      <div style="margin-bottom:1.4rem; background: #2e2c2cff; color: #dec5c5ff; padding:1rem; border-radius:0.6rem; font-size:0.78rem;">
        <strong>Non-Commercial Educational Use Notice:</strong><br>
        This app is intended exclusively for educational and study purposes. Access is restricted to authorized users who possess a valid access code. All materials, information, and content provided within this app are for personal study only and must not be used for illegal, commercial, or unauthorized activities.<br>
        By using this app, each user accepts full responsibility for their individual actions. The creator of this app is not liable for misuse or violations of these terms by users.
      </div>
      <p style="color: #f6efefff;" >Please enter your username to access.</p>
      <form id="login-form" autocomplete="off">
        <label for="key"></label>
        <input id="key" type="text" required autocomplete="off" class="input-field" />
        <button type="submit" class="btn-login">Log in</button>
      </form>
      <div id="login-msg" style="color:yellow; margin-top:1rem"></div>
      
    </div>
  `;
  document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const keyValue = document.getElementById('key').value.trim();
    if (whitelist.includes(keyValue)) {
      // === CAMBIO: Guardar timestamp del login ===
      sessionStorage.setItem("authed", "yes");
      sessionStorage.setItem("loginTime", Date.now().toString());
      location.reload();
    } else {
      document.getElementById('login-msg').textContent = "Incorrect or unauthorized username";
      sessionStorage.removeItem("authed");
      sessionStorage.removeItem("loginTime");
    }
  };
}

// === FUNCTION: Renders Topics ===
let currentTopic = flashcardsData[0].topic;

function renderTopics() {
  topicsNav.innerHTML = "";
  flashcardsData.forEach(({topic}) => {
    const btn = document.createElement('button');
    btn.textContent = topic;
    btn.classList.toggle('active', topic === currentTopic);
    btn.onclick = () => {
      currentTopic = topic;
      renderTopics();
      renderFlashcards();
    };
    topicsNav.appendChild(btn);
  });
}

function renderFlashcards() {
  const topicObj = flashcardsData.find(t => t.topic === currentTopic);
  flashcardsContainer.innerHTML = "";

  if (!topicObj) return;

  topicObj.cards.forEach(card => {
    // 3D flip Structure
    const cardDiv = document.createElement('div');
    cardDiv.className = 'flashcard';

    const cardInner = document.createElement('div');
    cardInner.className = 'flashcard-inner';

    const frontDiv = document.createElement('div');
    frontDiv.className = 'flashcard-front';
    frontDiv.textContent = card.front;

    const backDiv = document.createElement('div');
    backDiv.className = 'flashcard-back';
    backDiv.textContent = card.back;

    cardInner.appendChild(frontDiv);
    cardInner.appendChild(backDiv);
    cardDiv.appendChild(cardInner);

    cardDiv.addEventListener('click', function () {
      cardDiv.classList.toggle('flipped');
    });

    flashcardsContainer.appendChild(cardDiv);
  });
}

// === CHANGE: Validate session time before displaying the app ===
const authed = sessionStorage.getItem("authed");
const loginTime = sessionStorage.getItem("loginTime");

if (
  !authed ||
  !loginTime ||
  (Date.now() - parseInt(loginTime, 10)) > SESSION_LENGTH // If more than 12 hours have passed
) {
  sessionStorage.removeItem("authed");
  sessionStorage.removeItem("loginTime");
  showLoginForm();
} else {
  renderTopics();
  renderFlashcards();
}
