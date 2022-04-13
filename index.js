console.log('This is a Analog clock');

let audio = new Audio('clock.mp3');
setInterval(() => {
    date = new Date;
    hour = date.getHours();
    minute = date.getMinutes();
    seconds = date.getSeconds();
  
    /*jodi 12 hour ghurte 360 deg rotation hy
       to 1 hour ghurte lgbe 360/12 = 30 degree.
       so H hours ghurle 30*H deg rotation hbe. 
    
       ebare 60 min ghurle 30 deg rotation hyy 
       to 1 min ghurle 30/60 = 1/2 deg rotation hy.
       so M min ghurle M/2 deg rotation korte hbe. \
    */
    hoursRotation = 30 * hour + minute / 2;
    /*ebare 60 min e 360 degree hy
      1 min hote = 6 degree
      so M min hote = 6*M  
    */
    minuteRotation = 6 * minute;
    /*ebare 60 sec e 360 degree hy
      1 sec hote = 6 degree
      so S sec hote = 6*M  
    */
    secondRotation = 6 * seconds;

    document.getElementById('hour').style.transform = `rotate(${hoursRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondRotation}deg)`;
    audio.play();
}, 1000);

