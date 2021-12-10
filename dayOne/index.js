let theTimer;   

const reduceSeconds = () => {
    let minutes = document.getElementById('minute-value').value;
    let seconds = document.getElementById('second-value').value;
    document.getElementById('minute-value').disabled = true;
    document.getElementById('second-value').disabled = true;
    document.querySelector('circle').style["stroke"] = "#09A65A" 

    //Check whether the seconds has reached zero - if s;o set seconds to 60 and then reduce minutes
    
    if (seconds == 00 && minutes != 00) {
                    seconds = 60;
                    minutes--
                }                 
                    seconds--
     //Check whether the seconds and minutes have reached zero - stop and change to red
    if (seconds == 00 && minutes == 00) {
        clearInterval(theTimer)
        document.querySelector('circle').style["stroke"] = "#900A0A"            
                    }          

    document.getElementById('minute-value').value = minutes.toString().padStart(2, '0');
    document.getElementById('second-value').value = seconds.toString().padStart(2, '0');
}


const countdown = () => {
    let isitStopOrStart = document.getElementById('startButton').textContent;
    if (isitStopOrStart === "start") {
        document.getElementById('startButton').textContent = "stop";
        theTimer = setInterval(reduceSeconds, 1000)
    }
    else {
        clearInterval(theTimer) 
        document.getElementById('startButton').textContent = "start";
    }
    } 


 const edit = () => {
    document.getElementById('minute-value').disabled = false;
    document.getElementById('second-value').disabled = false;
 }   