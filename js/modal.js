//*Appointment form

const toggleError = (id, error) => {
  const el = document.getElementById(id);
  error ? el.classList.add('error-mod') : el.classList.remove('error-mod');
};

const appointment = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  // Сheck name
  const name = form.get('name');
  toggleError('js-name', !name);

  // Сheck tel
  const tel = form.get('tel');
  toggleError('js-tel', tel.length < 10, !tel);

  // Сheck text
  const text = form.get('text');
  toggleError('js-text', text.length < 30, !text);

  // Sending data
  fetch(
    'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
    {
      method: 'POST',
      headers: { Authorization: 'form appointment' },
      body: form,
    }
  )
    .then((response) => response.json())
    .then((result) => console.log(result));

  // Cleaning form
  document.getElementById('js-textForm').reset();
};

// Listener
document.getElementById('js-textForm').addEventListener('submit', appointment);

export { appointment };
