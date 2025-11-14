import { flashcardsData } from "./data/flashcards.js";
import { whitelist } from "./data/whitelist.js";

const topicsNav = document.getElementById("topics-nav");
const flashcardsContainer = document.getElementById("flashcards-container");

const modalOverlay = document.getElementById("image-modal-overlay");
const modalImg = document.getElementById("image-modal-img");

const SESSION_LENGTH = 12 * 60 * 60 * 1000; // 12 hours

/*  */
// Función global para ajustar la altura del card y del inner según la cara visible
function ajustarAltura(cardDiv, cardInner, frontDiv, backDiv, flipped) {
  // Medimos ambas caras
  const frontHeight = frontDiv.offsetHeight;
  const backHeight = backDiv.offsetHeight; // Usamos la altura según el estado flipped
  const tarjetaHeight = flipped ? backHeight : frontHeight;
  cardDiv.style.height = tarjetaHeight + "px";
  cardInner.style.height = tarjetaHeight + "px";
}

// === Log in Form ===
function showLoginForm() {
  document.body.innerHTML = `
    <div class="container">
      <h2 style="color: #dec5c5ff;">Restricted Acces</h2>
      <div style="margin-bottom:1.4rem; background: #2e2c2cff; color: #dec5c5ff; padding:1rem; border-radius:0.6rem; font-size:0.78rem;">
        <strong>Non-Commercial Educational Use Notice:</strong><br>
        This app is intended exclusively for educational and study purposes. Access is restricted to authorized users who possess a valid access code. All materials, information, and content provided within this app are for personal study only and must not be used for illegal, commercial, or unauthorized activities.<br>
        By using this app, each user accepts full responsibility for their individual actions. The creator of this app is not liable for misuse or violations of these terms by users.
      </div>
      <p style="color: #f6efefff;" >Type your key name to access.</p>
      <form id="login-form" autocomplete="off">
        <label for="key"></label>
        <input id="key" type="text" required autocomplete="off" class="input-field" />
        <button type="submit" class="btn-login">Log in</button>
      </form>
      <div id="login-msg" style="color:yellow; margin-top:1rem"></div>
    </div>
  `;
  document.getElementById("login-form").onsubmit = function (e) {
    e.preventDefault();
    const keyValue = document.getElementById("key").value.trim();
    if (whitelist.includes(keyValue)) {
      sessionStorage.setItem("authed", "yes");
      sessionStorage.setItem("loginTime", Date.now().toString());
      location.reload();
    } else {
      document.getElementById("login-msg").textContent =
        "Incorrect or unauthorized username";
      sessionStorage.removeItem("authed");
      sessionStorage.removeItem("loginTime");
    }
  };
}

// === Render Topics ===
let currentTopic = flashcardsData[0].topic;
function renderTopics() {
  topicsNav.innerHTML = "";
  flashcardsData.forEach(({ topic }) => {
    const btn = document.createElement("button");
    btn.textContent = topic;
    btn.classList.toggle("active", topic === currentTopic);
    btn.onclick = () => {
      currentTopic = topic;
      renderTopics();
      renderFlashcards();
    };
    topicsNav.appendChild(btn);
  });
}

// === Image Modal Logic ===
function openImageModal(src, alt) {
  modalImg.src = src;
  modalImg.alt = alt || "";
  modalOverlay.style.display = "flex";
  // Slight delay to allow CSS transition
  setTimeout(() => modalOverlay.classList.add("active"), 10);
  document.body.style.overflow = "hidden"; // prevent background scroll

  // Esc key closes modal
  document.addEventListener("keydown", escModal);
}
// Remove modal and cleanup
function closeImageModal() {
  modalOverlay.classList.remove("active");
  setTimeout(() => {
    modalOverlay.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = "";
  }, 310);
  document.removeEventListener("keydown", escModal);
}
function escModal(e) {
  if (e.key === "Escape") closeImageModal();
}
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) closeImageModal();
  // Only close if clicking on overlay, not on image itself
});

// === Render Flashcards ===
function renderFlashcards() {
  const topicObj = flashcardsData.find(t => t.topic === currentTopic);
  flashcardsContainer.innerHTML = "";

  if (!topicObj) return;

  topicObj.cards.forEach(card => {
    // Crear estructura de la flashcard
    const cardDiv = document.createElement('div');
    cardDiv.className = 'flashcard';

    const cardInner = document.createElement('div');
    cardInner.className = 'flashcard-inner';

    // Front side
    const frontDiv = document.createElement('div');
    frontDiv.className = 'flashcard-front';

    const frontText = document.createElement('span');
    frontText.textContent = card.front;
    frontDiv.appendChild(frontText);

    // Back side
    const backDiv = document.createElement('div');
    backDiv.className = 'flashcard-back';

    const backText = document.createElement('span');
    backText.textContent = card.back;
    backDiv.appendChild(backText);

    // Imagen en el back (modal feature)
    let imgElem = null;

    if (card.img && card.img.trim() !== "") {
      imgElem = document.createElement('img');
      imgElem.src = card.img;
      imgElem.alt = card.front;
      imgElem.className = 'flashcard-img';
      imgElem.tabIndex = 0; // accessibility: focusable

      // Abrir modal al hacer click o tap
      imgElem.addEventListener('click', function(event) {
        event.stopPropagation();
        openImageModal(card.img, card.front);
      });
      imgElem.addEventListener('touchstart', function(event) {
        event.stopPropagation();
        openImageModal(card.img, card.front);
      });

      // Reajustar altura al cargar imagen
      imgElem.addEventListener('load', function() {
        ajustarAltura(cardDiv, cardInner, frontDiv, backDiv, cardDiv.classList.contains('flipped'));
      });

      backDiv.appendChild(imgElem);
    }

    // Montar estructura
    cardInner.appendChild(frontDiv);
    cardInner.appendChild(backDiv);
    cardDiv.appendChild(cardInner);
    flashcardsContainer.appendChild(cardDiv);

    // Calcular altura inicial según el front (visible)
    ajustarAltura(cardDiv, cardInner, frontDiv, backDiv, false);

    // Evento flip sincronizado
    cardDiv.addEventListener('click', function(e) {
      if (!e.target.classList.contains('flashcard-img')) {
        const flippedNext = !cardDiv.classList.contains('flipped');
        ajustarAltura(cardDiv, cardInner, frontDiv, backDiv, flippedNext); // Ajuste justo antes del flip
        cardDiv.classList.toggle('flipped');
      }
    });
  });
}

// === Validate session time before displaying the app ===
const authed = sessionStorage.getItem("authed");
const loginTime = sessionStorage.getItem("loginTime");
if (
  !authed ||
  !loginTime ||
  Date.now() - parseInt(loginTime, 10) > SESSION_LENGTH // If more than 12 hours have passed
) {
  sessionStorage.removeItem("authed");
  sessionStorage.removeItem("loginTime");
  showLoginForm();
} else {
  renderTopics();
  renderFlashcards();
}
