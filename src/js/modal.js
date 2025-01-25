const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('modal-overlay');

export function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
}

export function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

// function openModal повноцінна/ окремо closeModal функцію/ слухача клав в опен модал і в клоз модал.
