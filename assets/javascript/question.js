
//timer
var countdownNumberEl = document.getElementById('timer');
var countdown = 10;

countdownNumberEl.textContent = countdown;

setInterval(function() {
    if(countdown===0){
    }else{
        countdown = --countdown
        countdownNumberEl.textContent = countdown;
    }
}, 1000);