  const openModalBtn = document.getElementById('contactBtn'); // Тепер Контакти
  const modalOverlay = document.getElementById('modalOverlay');
  const closeModalBtn = document.getElementById('closeModal');

  openModalBtn.addEventListener('click', (e) => {
    e.preventDefault(); // щоб посилання не прокручувало сторінку
    modalOverlay.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });