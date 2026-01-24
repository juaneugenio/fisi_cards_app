import { flashcardsData } from "./data/flashcards.js";
import { whitelist } from "./data/whitelist.js";

const topicsNav = document.getElementById("topics-nav");
const flashcardsContainer = document.getElementById("flashcards-container");

const modalOverlay = document.getElementById("image-modal-overlay");
const modalImg = document.getElementById("image-modal-img");
const modalClose = document.getElementById("image-modal-close");
let lastFocused = null;

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
      <h2 style="color: #02182B;">Restricted Acces</h2>
      <div style="margin-bottom:1.4rem; background: #02182B; color: #ffffff; padding:1rem; border-radius:0.6rem; font-size:0.95rem; line-height: 1.5;">
        <strong>Non-Commercial Educational Use Notice:</strong><br>
        This app is intended exclusively for educational and study purposes. Access is restricted to authorized users who possess a valid access code. All materials, information, and content provided within this app are for personal study only and must not be used for illegal, commercial, or unauthorized activities.<br>
        By using this app, each user accepts full responsibility for their individual actions. The creator of this app is not liable for misuse or violations of these terms by users.
      </div>
      <p style="color: #02182B;" >Type your key name to access.</p>
      <form id="login-form" autocomplete="off">
        <label for="key"></label>
        <input id="key" type="text" required autocomplete="off" class="input-field" />
        <button type="submit" class="btn-login">Log in</button>
      </form>
      <div id="login-msg" style="color:#D7263D; margin-top:1rem"></div>
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
  lastFocused = document.activeElement;
  modalOverlay.style.display = "flex";
  // Slight delay to allow CSS transition
  setTimeout(() => modalOverlay.classList.add("active"), 10);
  document.body.style.overflow = "hidden"; // prevent background scroll
  if (modalClose) modalClose.focus();

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
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
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
if (modalClose) {
  modalClose.addEventListener("click", function () {
    closeImageModal();
  });
}

// === Render Flashcards ===
function renderFlashcards() {
  const topicObj = flashcardsData.find(t => t.topic === currentTopic);
  flashcardsContainer.innerHTML = "";

  if (!topicObj) return;

  topicObj.cards.forEach(card => {
    // Crear la estructura de la tarjeta
    const cardDiv = document.createElement('div');
    cardDiv.className = 'flashcard';
    cardDiv.tabIndex = 0; // Hace que la tarjeta sea enfocable con Tab
    cardDiv.setAttribute('role', 'button'); // Semántica para lectores de pantalla

    const cardInner = document.createElement('div');
    cardInner.className = 'flashcard-inner';

    // Info de la tarjeta (tema y número)
    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';
    cardInfo.innerHTML = `<b>Karte ${card.cardNumber}</b> | ${topicObj.topic}`;

    // FRONT
    const frontDiv = document.createElement('div');
    frontDiv.className = 'flashcard-front';
    frontDiv.appendChild(cardInfo);

    // ---- Añadimos el contenido del front (puede tener imagen HTML) ----
    const frontText = document.createElement('div');
    frontText.className = 'flashcard-text';
    frontText.innerHTML = card.front; // usa innerHTML para admitir HTML (img/formatos)
    frontDiv.appendChild(frontText);

    // ---- Detecta imagen en el front y añade zoom ----
    const frontImg = frontDiv.querySelector('.flashcard-img');
    if (frontImg) {
      frontImg.loading = 'lazy';
      frontImg.addEventListener('load', function() {
        ajustarAltura(cardDiv, cardInner, frontDiv, backDiv, false);
      });
      frontImg.addEventListener('click', function(event) {
        event.stopPropagation();
        openImageModal(frontImg.src, frontImg.alt || '');
      });
    }

    // BACK
    const backDiv = document.createElement('div');
    backDiv.className = 'flashcard-back';
    // info de la tarjeta también en back
    const cardInfoBack = cardInfo.cloneNode(true);
    backDiv.appendChild(cardInfoBack);

    // ----- Contenido del back (texto, imagen, formato) -----
    const backText = document.createElement('div');
    backText.className = 'flashcard-text';
    backText.innerHTML = card.back;
    backDiv.appendChild(backText);

    // Imagen en el back (si existe)
    if (card.img && card.img.trim() !== "") {
      const imgElem = document.createElement('img');
      imgElem.src = card.img;
      imgElem.alt = card.front;
      imgElem.className = 'flashcard-img';
      imgElem.tabIndex = 0;
      imgElem.loading = 'lazy';

      imgElem.addEventListener('load', function() {
        const flippedNow = cardDiv.classList.contains('flipped');
        ajustarAltura(cardDiv, cardInner, frontDiv, backDiv, flippedNow);
      });

      // Zoom en imagen de back
      imgElem.addEventListener('click', function(event) {
        event.stopPropagation();
        openImageModal(imgElem.src, imgElem.alt || '');
      });
      backDiv.appendChild(imgElem);
    }

    // Estructura final
    cardInner.appendChild(frontDiv);
    cardInner.appendChild(backDiv);
    cardDiv.appendChild(cardInner);
    flashcardsContainer.appendChild(cardDiv);

    // Ajuste inicial de altura según el front (si usas la función ajustarAltura)
    ajustarAltura(cardDiv, cardInner, frontDiv, backDiv, false);

    // Función auxiliar para voltear
    const toggleFlip = () => {
      const flippedNext = !cardDiv.classList.contains('flipped');

      // Si vamos a voltear para ver el reverso, cerramos cualquier otra tarjeta abierta
      if (flippedNext) {
        document.querySelectorAll('.flashcard.flipped').forEach(otherCard => {
          otherCard.classList.remove('flipped');
          const oInner = otherCard.querySelector('.flashcard-inner');
          const oFront = oInner.querySelector('.flashcard-front');
          const oBack = oInner.querySelector('.flashcard-back');
          ajustarAltura(otherCard, oInner, oFront, oBack, false);
        });
      }

      ajustarAltura(cardDiv, cardInner, frontDiv, backDiv, flippedNext);
      cardDiv.classList.toggle('flipped');
    };

    // Evento de flip (Click)
    cardDiv.addEventListener('click', function(e) {
      if (!e.target.classList.contains('flashcard-img')) toggleFlip();
    });

    // Evento de flip (Teclado: Enter o Espacio)
    cardDiv.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Evita el scroll con la barra espaciadora
        toggleFlip();
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
