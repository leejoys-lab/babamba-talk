const clock = document.getElementById("clock");
const clocks = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
  clocks.innerText = `${hours}:${String(minutes - 1).padStart(2, "0")}`;
}

getClock();
