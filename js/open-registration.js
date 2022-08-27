//*Open registration modal
const registrationlOpen = () => {
  document.getElementById('js-registration-form').classList.toggle('show-reg');
};
document
  .getElementById('js-reg-button-open')
  .addEventListener('click', registrationlOpen);
document
  .getElementById('js-reg-button-close')
  .addEventListener('click', registrationlOpen);

export { registrationlOpen };
