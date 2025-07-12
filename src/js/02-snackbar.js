import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', submitForm);

const createPromise = (delayValue, stateValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    }, delayValue);
  });
};

function submitForm(e) {
  e.preventDefault();
  const delayValue = parseInt(form.elements.delay.value, 10);
  const stateValue = document.querySelector(
    'input[name="state"]:checked').value;

  createPromise(delayValue, stateValue).then(delay => {
    iziToast.success({
      message: `✅ Fulfilled promise in ${delay}ms`,
      position: 'topRight',
    });
  }).catch(delay => {
    iziToast.error({
      message: `❌ Rejected promise in ${delay}ms`,
      position: 'topRight',
    });
  }).finally(() => {
    form.reset();
  });
}