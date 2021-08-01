//Timer

window.onload=()=>{
  if(localStorage.getItem('time')!=`00 : 00 : 00 `){
    timerRef.innerHTML=localStorage.getItem('time');
  }else{
      timerRef.innerHTML=`00 : 00 : 00`;
  }
};


let [seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

const start=document.querySelector('#button-start');
const pause=document.querySelector('#button-pause');
const reset=document.querySelector('#button-reset');


start.addEventListener('click',()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,1000);
});

 pause.addEventListener('click',()=>{
    
    clearInterval(int);
    localStorage.setItem('time',timerRef.innerHTML);
 });

reset.addEventListener('click',()=>{
    clearInterval(int);
    [seconds,minutes,hours] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 ';
    localStorage.setItem('time',`00 : 00 : 00`);
});

function displayTimer(){
    seconds+=1;

        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
    
}