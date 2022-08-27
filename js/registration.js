//*Registration form

const toggleError = (id, error) => {
  const el = document.getElementById(id);
  error ? el.classList.add('error-reg') : el.classList.remove('error-reg');
};

const registration = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  // Сheck first name
  const firstName = form.get('firstName');
  toggleError('js-registration-form-first-name', !firstName);

  // Сheck last name
  const lastName = form.get('lastName');
  toggleError('js-registration-form-last-name', !lastName);

  // Сheck user name
  const userName = form.get('userName');
  toggleError('js-registration-form-user-name', userName.length < 5, !userName);

  // Сheck email
  const email = form.get('email');
  toggleError('js-registration-form-email', !email);

  // Сheck password
  const password = form.get('password');
  toggleError('js-registration-form-password', password.length <= 5, !password);

  // Sending data
  fetch(
    'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
    {
      method: 'POST',
      headers: { Authorization: 'form registration' },
      body: form,
    }
  )
    .then((response) => response.json())
    .then((result) => console.log(result));

  // Cleaning form
  document.getElementById('js-registration-form').reset();
};

// Listener
document
  .getElementById('js-registration-form')
  .addEventListener('submit', registration);

export { registration };
