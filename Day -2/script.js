function showTime() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);
    const distance = newYear - date;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    const Days = days < 10 ? "0" + days : days;
    const Hours = hours < 10 ? "0" + hours : hours;
    const Minutes = minutes < 10 ? "0" + minutes : minutes;
    const Seconds = seconds < 10 ? "0" + seconds : seconds

    const time = `${Days} days ${Hours}:${Minutes}:${Seconds} remains in ${currentYear}`;
    document.querySelector("#timer").innerText = time;
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector("#timer").innerText = "Happy New Year!";
    }
}
showTime();
const countdownInterval = setInterval(function(){
    showTime();
},1000);


function showclock(){
    const date=new Date();
    let day=date.getDate();
    let mon=date.getMonth();
    let year=date.getFullYear();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let sec=date.getSeconds();
    let session="AM";
    if(hours>12){
        hours=hours-12;
        session="PM";
    }
    hours=(hours<10)?"0"+hours:hours;
    let time=" "+hours+":"+mins+":"+sec+" "+session
    let today=day+"/"+mon+"/"+year;
    document.querySelector("#clock").innerText =time;
    document.querySelector("#date").innerText= today;
}
showclock();
setInterval(function(){
    showclock();
},1000)