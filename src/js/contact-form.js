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
  const status = error?.response?.status;
  const message = error?.response?.data?.message;

  if (status >= 400 && status < 500) {
    showError(message || 'Please check your input and try again');
    return;
  }

  showError('Something went wrong. Please try again later');
};

const toggleControls = (elements, disabled) => {
  elements.forEach(el => {
    el.disabled = disabled;

    if (el.type === 'submit') {
      el.querySelector('.button-text')?.classList.toggle('hidden', disabled);
      el.querySelector('.loader')?.classList.toggle('hidden', !disabled);
    }
  });
};

const disableControls = (elements) => {
  toggleControls(elements, true);
};

const enableControls = (elements) => {
  toggleControls(elements, false);
}

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
    const buttonElement = contactsForm.querySelector('.contacts-form-submit');

    const isNameValid = validateName(nameElement);
    const isPhoneValid = validatePhoneNumber(phoneElement);
    const isMessageValid = validateMessage(messageElement);

    if (!isNameValid || !isPhoneValid || !isMessageValid) {
      return;
    }

    const controls = [nameElement, phoneElement, messageElement, buttonElement];
    disableControls(controls);

    const payload = {
      name: nameElement.value,
      phone: phoneElement.value.replace(/\D/g, ''),
    };

    const message = messageElement.value.trim();
    if (message) {
      payload.message = message;
    }

    try {
      const { orderNum } = await createOrder(payload);
      contactsForm.reset();
      openModal(orderNum);
    } catch (error) {
      handleError(error);
    } finally {
      enableControls(controls);
    }
  });
};

init();