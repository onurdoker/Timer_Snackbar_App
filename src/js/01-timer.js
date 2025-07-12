import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let userSelected = null;
let timerId = null;

btnStart.disabled = true;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  dateInput.disabled = true;

  timerId = setInterval(() => {
    const timer = new Date(dateInput.value) - Date.now();
    if (timer <= 0) {
      clearInterval(timerId);
      timeOutPut({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      btnStart.disabled = false;
      dateInput.disabled = false;
      return;
    }
    timeOutPut(convertMs(timer));
  }, 1000);
});

const timeOutPut = ({ days, hours, minutes, seconds }) => {
  dataDays.textContent = String(days).padStart(2, '0');
  dataHours.textContent = String(hours).padStart(2, '0');
  dataMinutes.textContent = String(minutes).padStart(2, '0');
  dataSeconds.textContent = String(seconds).padStart(2, '0');
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const option = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelected = selectedDates[0];
    const currentDate = Date.now();

    if (userSelected <= currentDate) {
      btnStart.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    } else {
      btnStart.disabled = false;
    }
  },
};

flatpickr(dateInput, option);