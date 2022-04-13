console.log('This is Digital Clock');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let audio = new Audio('clock.mp3');
setInterval(() => {
    let a = new Date;
    hour = a.getHours();
    minute = a.getMinutes();
    second = a.getSeconds();
    date = a.toLocaleDateString(undefined, options);

    document.getElementById('Hour').innerHTML = hour + ':';
    document.getElementById('Minute').innerHTML = minute + ':';
    document.getElementById('Second').innerHTML = second;
    document.getElementById('date').innerHTML = date;
    audio.play();
    if(hour >= 12){
        document.getElementById('period').innerHTML = 'PM';
    }
    else{
        document.getElementById('period').innerHTML = 'AM';
    }
    for(let i = 0; i < 10; i++){
        if(second == i){
            document.getElementById('Second').innerHTML = `0${i}`;
        }
    }
    for(let i = 0; i < 10; i++){
        if(minute == i){
            document.getElementById('Minute').innerHTML = `0${i}:`;
        }
    }
    for(let i = 0; i < 10; i++){
        if(hour == i){
            document.getElementById('Hour').innerHTML = `0${i}:`;
        } 
    }
}, 1000);
