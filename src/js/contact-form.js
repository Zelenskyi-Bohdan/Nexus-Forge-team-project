import IMask from 'imask';
import { createOrder } from './api.js';
import { validateMessage, validateName, validatePhoneNumber } from './contact-form-validation.js';

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