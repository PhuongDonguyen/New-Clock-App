setInterval(updateDisplay, 1000);

const hourHand = document.querySelector('.hourHand');
const minHand = document.querySelector('.minHand');
const secHand = document.querySelector('.secHand');

function updateDisplay() {
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now .getSeconds();
    let secondsDeg = sec * 360/60;
    let minDeg = min * 360/60;
    let hourDeg = hour * 360/12;
    hourHand.style.transform = `rotate(${90 + hourDeg}deg)`;
    minHand.style.transform = `rotate(${90 + minDeg}deg)`;
    secHand.style.transform = `rotate(${90 +secondsDeg}deg)`;
}