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
    const cardDiv = document.createElement('div');
    cardDiv.className = 'flashcard';
    cardDiv.textContent = card.front;
    cardDiv.addEventListener('click', function () {
      if (cardDiv.classList.contains('flipped')) {
        cardDiv.textContent = card.front;
        cardDiv.classList.remove('flipped');
      } else {
        cardDiv.textContent = card.back;
        cardDiv.classList.add('flipped');
      }
    });
    flashcardsContainer.appendChild(cardDiv);
  });
}

renderTopics();
renderFlashcards();
