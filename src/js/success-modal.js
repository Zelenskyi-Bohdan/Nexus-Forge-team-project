const modal = document.querySelector('[data-modal]');

const closeButtons = modal.querySelectorAll('[data-modal-close]');

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

const handleBackdropClick = event => {
  if (event.target === modal) {
    closeModal();
  }
};

const closeModal = () => {
  modal.classList.add('is-hidden');
  document.body.style.overflow = '';

  closeButtons.forEach(button => {
    button.removeEventListener('click', closeModal);
  });

  document.removeEventListener('keydown', handleEscape);
  modal.removeEventListener('click', handleBackdropClick);
};

export const openModal = orderNum => {
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  const orderElement = modal.querySelector('.modal-order-number');
  orderElement.textContent = `Your order number: ${orderNum}`;

  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscape);
};