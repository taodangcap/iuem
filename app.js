const myDate = "2022-10-19";

const oldDate = new Date(myDate);
const newDate = new Date();

// Count days between two dates
const dateDiff = Math.abs(newDate.getTime() - oldDate.getTime());
const days = Math.ceil(dateDiff / (1000 * 3600 * 24));
document.querySelector(".days").innerHTML = days + " Ngày";

setInterval(() => {
  // Count seconds between two dates
  const sOldDate = new Date(myDate);
  const sNewDate = new Date();
  const secondDiff = Math.abs(sOldDate.getTime() - sNewDate.getTime());
  const seconds = Math.ceil(secondDiff / 1000);
  // seconds
  document.querySelector(".seconds").innerHTML = seconds + " giây xa bạn đó nè";
}, 1000);
for (let i = 0; i < 50; i++) {
  let snow = document.createElement("div");
  let po = Math.floor(Math.random() * 100);
  let d = Math.floor(Math.random() * 10000);
  let snowBlur = Math.floor(Math.random() * 15);
  snow.id = "snow";
  snow.style.left = po + "%";
  snow.style.animationDuration = d + "ms";
  snow.style.filter = `blur(${snowBlur + 2}px)`;
  document.body.appendChild(snow);
}
