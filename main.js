'use strict';

// ナビゲーションバーの開閉
const checkbox = document.getElementById('drawer_input');
const navigation = document.querySelector('.nav_content');

checkbox.addEventListener('click', function (event) {
  if (checkbox.checked) {
    navigation.classList.add('nav_checked');
  } else {
    navigation.classList.remove('nav_checked');
  }
});

document.addEventListener('click', function (event) {
  if (!event.target.closest('input#drawer_input')) {
    navigation.classList.remove('nav_checked');
  }
});
navigation.addEventListener('click', function (event) {
  event.stopPropagation();
});

// モーダル関連
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

btnCloseModal.addEventListener('click', () => {
  closeModal(modal);
});
overlay.addEventListener('click', () => {
  closeModal(modal);
});

document.querySelectorAll('.clickable-image').forEach(image => {
  image.addEventListener('click', function (event) {
    event.preventDefault();
    const parent = this.parentElement;
    const descriptionText = parent.querySelector('.description').textContent;
    const descriptionTextLanguage = parent.querySelector(
      '.description-language'
    ).textContent;
    const descriptionGit = parent.querySelector('.description-git').textContent;

    openModal(
      this.querySelector('img').alt,
      this.querySelector('img').src,
      descriptionText,
      descriptionTextLanguage,
      this.href,
      descriptionGit
    );
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

function closeModal(modal) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(modal);
  }
});

function openModal(
  alt,
  src,
  descriptionText,
  descriptionTextLanguage,
  href,
  descriptionGit
) {
  document.querySelector('.modal h3').textContent = alt;
  document.querySelector('.modal img').alt = alt;
  document.querySelector('.modal img').src = src;
  document.querySelector('.modal div').textContent = descriptionTextLanguage;
  document.querySelector('.modal p').textContent = descriptionText;
  document.querySelector('.modal a').href = href;
  document.getElementById('modal-btn-app').onclick = () => {
    window.location.href = href;
  };
  document.getElementById('modal-btn-git').onclick = () => {
    window.location.href = descriptionGit;
  };
}
