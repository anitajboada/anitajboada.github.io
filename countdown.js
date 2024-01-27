const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// event UTC start date (2024-03-10 7:00 local time UTC-4)
let countDown = new Date(Date.UTC(2024, 2, 10, 9, 0, 0)).getTime();

var countdownFunction = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDown - now;

    if (distance > 0) {
        document.getElementById('days').innerText = Math.floor(distance / (day)).toString();
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)).toString().padStart(2, '0');
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)).toString().padStart(2, '0');
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second).toString().padStart(2, '0');
    } else {
        document.getElementById('days').innerText = '0';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        clearInterval(countdownFunction);
    }
}, second)
