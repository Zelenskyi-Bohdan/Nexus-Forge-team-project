import IMask from 'imask';
import { createOrder } from './api-functions.js';

const validateName = (input) => {
  const label = input.parentElement;
  const errorMessage = label.querySelector('.error-message');
  const value = input.value.trim();

  if (!value) {
    label.classList.add('error');
    errorMessage.textContent = 'Please enter a valid name';
    return false;
  }

  label.classList.remove('error');
  errorMessage.textContent = '';
  return true;
};

const validatePhoneNumber = (input) => {
  const label = input.parentElement;
  const errorMessage = label.querySelector('.error-message');
  const value = input.value.replace(/\D/g, '');
  if (!value || value.length !== 12) {
    label.classList.add('error');
    errorMessage.textContent = 'Please enter a valid phone number. Ex: +10 (202) 111 2323';
    return false;
  }
  label.classList.remove('error');
  errorMessage.textContent = '';
  return true;
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

    const isNameValid = validateName(nameElement);
    const isPhoneValid = validatePhoneNumber(phoneElement);

    if (!isNameValid || !isPhoneValid) {
      return;
    }

    const phoneValue = phoneElement.value.replace(/\D/g, '');

    const payload = {
      name: nameElement.value,
      phone: phoneValue,
    }

    const message = contactsForm.elements['message'].value.trim();
    if (message) {
      payload.message = message;
    }

    try {
      const { _id: id, orderNum } = await createOrder(payload);
      console.log(`Order ID: ${id} created, orderNum: ${orderNum}`);
    } catch (error) {
      console.log(error);
    }

    console.log(payload);
    console.log('submit');
  });
};


init();