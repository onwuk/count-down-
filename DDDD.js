
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours'); 
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdownTime() {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(`${currentYear}-03-11T00:00:00`);


  const currentTime = new Date();
  const diff = targetDate - currentTime;

  if (diff <= 0) {
    // If the target date has passed, display all zeros
    daysElement.innerHTML = '00';
    hoursElement.innerHTML = '00';
    minutesElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
    return;
  }

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  daysElement.innerHTML = days < 10 ? '0' + days : days;
  hoursElement.innerHTML = hours < 10 ? '0' + hours : hours;
  minutesElement.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

// Call updateCountdownTime every second
setInterval(updateCountdownTime, 1000);

// Initial call to display the countdown immediately
updateCountdownTime();