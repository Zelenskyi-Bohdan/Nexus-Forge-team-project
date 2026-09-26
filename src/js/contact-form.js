import IMask from 'imask';
import { createOrder } from './api.js';
import { validateMessage, validateName, validatePhoneNumber } from './contact-form-validation.js';
import { openModal } from './success-modal.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import spriteUrl from '../img/sprite.svg';

const showError = message => {
  iziToast.show({
    titleColor: '#FFFFFF',
    message,
    messageColor: '#FFFFFF',
    position: 'topRight',
    transitionIn: 'fadeIn',
    animateInside: false,
    backgroundColor: '#ef4040',
    color: '#fff',
    icon: 'toast-icon',
    class: 'snackbar-toast',
    progressBarColor: '#b51b1b',
    maxWidth: '432px',
    onOpening(instance, toast) {
      const icon = toast.querySelector('.iziToast-icon');
      icon.innerHTML = `
        <svg width="24" height="24" aria-hidden="true">
          <use href="${spriteUrl}#x-octagon"></use>
        </svg>
      `;
    },
  });
};

const handleError = error => {
  const message = error?.response?.data?.message;
  const status = Number.parseInt(error?.response?.status);

  if (status >= 400 && status < 500) {
    showError(message || 'Please check your input and try again');
    return;
  }

  showError('Something went wrong. Please try again later');
};

const init = () => {
  const contactsForm = document.querySelector('.contacts-form');

  if (!contactsForm) {
    return;
  }

  const phoneElement = contactsForm.elements['phone'];

  if (phoneElement) {
    IMask(phoneElement, {
      mask: '+{00} (000) 000 0000',
    });
  }

  contactsForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameElement = contactsForm.elements['name'];
    const messageElement = contactsForm.elements['message'];

    const isNameValid = validateName(nameElement);
    const isPhoneValid = validatePhoneNumber(phoneElement);
    const isMessageValid = validateMessage(messageElement);

    if (!isNameValid || !isPhoneValid || !isMessageValid) {
      return;
    }

    const phoneValue = phoneElement.value.replace(/\D/g, '');

    const payload = {
      name: nameElement.value,
      phone: phoneValue,
    };

    const message = contactsForm.elements['message'].value.trim();
    if (message) {
      payload.message = message;
    }

    try {
      const { _id: id, orderNum } = await createOrder(payload);
      contactsForm.reset();
      openModal(orderNum);
    } catch (error) {
      handleError(error);
    }
  });
};

init();