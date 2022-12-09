import Timer from "./timer.js"
import Controls from "./controls.js"
import Sound from "./sound.js"
import {buttonPlay,
   buttonPause,
   buttonSet,
   buttonSoundOff,
   buttonSoundOn,
   buttonStop,
   minutesDisplay,
   secondsDisplay } from "./elements.js"

const controls = Controls({
   buttonPause,
   buttonPlay,
   buttonSet,
   buttonStop
}) 

const timer = Timer({
   minutesDisplay,
   secondsDisplay,
   resetControl : controls.reset,
})

const sound = Sound();

buttonPlay.addEventListener('click', function(){
    controls.play();
    timer.countDown();
    sound.pressButton();
   })
    
buttonPause.addEventListener('click', function (){
    controls.pause();
    timer.hold();
    sound.pressButton();
 })

 buttonSet.addEventListener('click', function(){
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide')
    sound.pressButton();
 })

 buttonStop.addEventListener('click', function(){
   controls.reset();
    timer.reset();
    sound.pressButton();
 })

 buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide')
    sound.pressButton();
    sound.bgAudio.play();
 })

 buttonSoundOff.addEventListener('click', function(){
    buttonSoundOff.classList.add('hide');
    buttonSoundOn.classList.remove('hide')
    sound.pressButton();
    sound.bgAudio.pause();
 })

 buttonSet.addEventListener('click', function(){
   let newMinutes = controls.getMinutes()
   
   if(!newMinutes)
   {
      timer.reset();
      return;
   }

   timer.updateTimeDisplay(newMinutes, 0);
   timer.updateMinutes(newMinutes);
 })
