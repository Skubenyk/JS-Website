const modalOpen = () => {
  document.getElementById('js-modal').classList.toggle('show-modal');
};

document.getElementById('js-button-open').addEventListener('click', modalOpen);
document.getElementById('js-button-close').addEventListener('click', modalOpen);

export { modalOpen };