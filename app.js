const myDate = "2022-10-19";

const oldDate = new Date(myDate);
const newDate = new Date();

// Count days between two dates
const dateDiff = Math.abs(newDate.getTime() - oldDate.getTime());
const days = Math.ceil(dateDiff / (1000 * 3600 * 24));
document.querySelector(".days").innerHTML = days + " days";

setInterval(() => {
  // Count seconds between two dates
  const sOldDate = new Date(myDate);
  const sNewDate = new Date();
  const secondDiff = Math.abs(sOldDate.getTime() - sNewDate.getTime());
  const seconds = Math.ceil(secondDiff / 1000);
  // seconds
  document.querySelector(".seconds").innerHTML = seconds + " seconds";
}, 1000);
