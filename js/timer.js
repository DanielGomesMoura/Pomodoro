import Sound from "./sound.js";

export default function Timer({
   minutesDisplay,
   secondsDisplay,
   resetControl
}){ 

   let timerTimeOut;
   let minutes = Number(minutesDisplay.textContent)

function updateTimeDisplay(newMinutes, seconds)
{
   newMinutes = newMinutes === undefined ? minutes : newMinutes;
   seconds = seconds === undefined ? 0 : seconds;
   minutesDisplay.textContent = String(newMinutes).padStart(2,"0"); 
   secondsDisplay.textContent = String(seconds).padStart(2,"0");
   
}

function updateMinutes(newMinutes)
{
   minutes = newMinutes;
}

function hold()
{
   clearTimeout(timerTimeOut);
}

function countDown() {
  timerTimeOut = setTimeout(() => {

      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      if(seconds <= 0 )
      {
        seconds = 60;

        if(minutes <= 0)
        {
           resetControl();
           Sound().timerEnd();
           updateTimeDisplay();
           return
        }
       --minutes 
      }

      updateTimeDisplay(minutes, String(seconds - 1))
      
      countDown();
    }, 1000);
}

function reset()
{
   updateTimeDisplay(minutes, 0);
   clearTimeout(timerTimeOut)
}

   return{
    countDown,
    reset,
    updateTimeDisplay,
    updateMinutes,
    hold
   }
}
