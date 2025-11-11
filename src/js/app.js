import { flashcardsData } from './data/flashcards.js';

const topicsNav = document.getElementById('topics-nav');
const flashcardsContainer = document.getElementById('flashcards-container');

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
    // Estructura para el flip 3D:
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

renderTopics();
renderFlashcards();
