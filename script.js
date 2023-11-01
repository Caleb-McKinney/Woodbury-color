'use strict';


const event = {
  eventName: "Macon Music & Arts",
  eventDate: new Date("2023-10-27T18:00:00"),
};
const countdown = document.getElementById("countdown");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const eventTime = event.eventDate.getTime();
  const timeRemaining = eventTime - now;

  if (timeRemaining <= 0) {
    countdown.innerHTML = "Event Started!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  daysSpan.innerHTML = days;
  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;
}

// Initial call to populate countdown
updateCountdown();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
