const showError = (label, message) => {
  label.classList.add('error');

  let errorMessage = label.querySelector('.error-message');

  if (!errorMessage) {
    errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    label.append(errorMessage);
  }

  errorMessage.textContent = message;
};

const clearError = (label) => {
  label.classList.remove('error');

  const errorMessage = label.querySelector('.error-message');

  if (errorMessage) {
    errorMessage.remove();
  }
};

export const validatePhoneNumber = (input) => {
  const label = input.parentElement;
  const value = input.value.replace(/\D/g, '');
  if (!value || value.length !== 12) {
    showError(label, 'Please enter a valid phone number. Ex: +10 (202) 111 2323');
    return false;
  }
  clearError(label);
  return true;
};

export const validateName = (input) => {
  const label = input.parentElement;
  const value = input.value.trim();

  if (!value) {
    showError(label, 'Please enter your name');
    return false;
  }

  if (value.length < 2) {
    showError(label, 'Name must be at least 2 characters long');
    return false;
  }

  if (value.length > 64) {
    showError(label, 'Name must not exceed 64 characters');
    return false;
  }

  clearError(label);
  return true;
};

export const validateMessage = (input) => {
  const label = input.parentElement;
  const value = input.value.trim();

  if (!value || value.length === 0) {
    clearError(label);
    return true;
  }

  if (value.length < 5) {
    showError(label, 'Message must be at least 5 characters long');
    return false;
  }

  if (value.length > 256) {
    showError(label, 'Message must not exceed 256 characters');
    return false;
  }

  clearError(label);
  return true;
};