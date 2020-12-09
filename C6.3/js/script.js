const btn = document.querySelector('.j-btn-test');
const icon_1 = document.querySelector('.btn_icon_1');
const icon_2 = document.querySelector('.btn_icon_2');

btn.addEventListener('click', () => {
  icon_1.classList.toggle('btn--magic');
  icon_2.classList.toggle('btn--magic');
});