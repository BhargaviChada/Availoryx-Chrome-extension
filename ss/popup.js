// // onload="loadNotes(),loadRemoveTasks()"
// //Take notes
// const getJoke=document.querySelector('.get-joke');
//   getJoke.addEventListener('click',function(){
//       const displayJoke = document.querySelector(".display-joke");
//       const url = "https://api.chucknorris.io/jokes/random";
//       fetch(url)
//       .then(response=>{
//           return response.json()
//       })
//       .then(responseData=>{
//           //console.log("response", responseData);
//           displayJoke.innerHTML = responseData.value;
//       })
//   });
  
// const saveNote=document.querySelector(".save-btn");
// console.log(saveNote);
// //  saveNote.addEventListener('click',function(){
// //     const input = document.querySelector(".input");
  
// //     if(input.value != ""){
  
// //       createNote(input.value);
  
// //       addToLocalStorage(input.value);
  
// //     }else{
// //         //Empty input
// //       throwError();
// //     }
   
// //     input.value="";
// // });
// //Create note
// createNote= (input)=>{
//     const displayJoke = document.querySelector(".display-notes");

//     const li=document.createElement('li');
//     li.className = 'list-item';
//     li.appendChild(document.createTextNode(input));

//     const link = document.createElement('a');
//     link.className = 'delete-item';
//     link.innerHTML = '<i class="fa fa-remove"></i>';

//     li.appendChild(link);

//     displayJoke.appendChild(li);
// }

// //loads notes from storage when window loads
// loadNotes= ()=>{
//     //gets notes from local storage
//     let notes=getNotes();

//     notes.forEach(note => {
//         createNote(note);
//     });
// }

// //add notes to UI
// // add= ()=>{
// //   const input = document.querySelector(".input");
  
// //   if(input.value != ""){

// //     createNote(input.value);

// //     addToLocalStorage(input.value);

// //   }else{
// //       //Empty input
// //     throwError();
// //   }
 
// //   input.value="";
// // }

// //Removing tasks
// //Event Delegation
// loadRemoveTasks= ()=>{

//     const ul=document.querySelector(".list");
//     ul.addEventListener('click',(e)=>{
//         if(e.target.parentElement.classList.contains('delete-item')){
//             e.target.parentElement.parentElement.remove();
//           }
        
//           removeNotesFromLocalStorage(e.target.parentElement.parentElement);
//     });
// }

// //Local Storage
// //gets notes from localstorage
// getNotes= ()=>{
//     let notes;

//     if(localStorage.getItem('notes') === null){
//         notes=[];
//     }else{
//         notes=JSON.parse(localStorage.getItem('notes'));
//     }

//     return notes;
// }

// //Adds to local storage
// addToLocalStorage= (note)=>{

//     let notes=getNotes();
//     notes.push(note);

//     localStorage.setItem('notes',JSON.stringify(notes));
// }

// //remove from local storage
// removeNotesFromLocalStorage= (noteItem)=>{
//     let notes=getNotes();
    
//     notes.forEach(function(note,index){
//         if(noteItem.textContent === note){
//           notes.splice(index,1);
//         }
//       });
    
//       localStorage.setItem('notes',JSON.stringify(notes));
// }

// //Error
// //Throws error if invalid input
// throwError= ()=>{

//     let previousNotes = document.querySelector(".previous-notes");
//     let notesHeading=document.querySelector('.notes-h1');
//     let err=document.querySelector(".display-error");
//     let errorPara=document.createElement('p');
    
//         errorPara.textContent='Please enter a note';
//         err.appendChild(errorPara);
//         previousNotes.insertBefore(err,notesHeading);

//     let saveBtn=document.querySelector('.save-btn');
//         saveBtn.disabled=true;

//         setTimeout(function(){
//         saveBtn.disabled=false; 
//         errorPara.style.display="none";
//         err.style.visibility="hidden";
//         err.innerHTML="";
//         },3000);
    
//         err.style.visibility="visible";
    
// }


// //Joke generator

// //gets a joke from chucknorris api
// //   const getJoke=document.querySelector('.get-joke');
// //   getJoke.addEventListener('click',function(){
// //       const displayJoke = document.querySelector(".display-joke");
// //       const url = "https://api.chucknorris.io/jokes/random";
// //       fetch(url)
// //       .then(response=>{
// //           return response.json()
// //       })
// //       .then(responseData=>{
// //           //console.log("response", responseData);
// //           displayJoke.innerHTML = responseData.value;
// //       })
// //   });
  
// //Timer

// let [seconds,minutes,hours] = [0,0,0,0];
// let timerRef = document.querySelector('.timerDisplay');
// let int = null;

// startTimer= ()=>{
//     if(int!==null){
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer,1000);
// }

// pauseTimer =()=>{
//     clearInterval(int);
// };

// resetTimer =()=>{
//     clearInterval(int);
//     [seconds,minutes,hours] = [0,0,0];
//     timerRef.innerHTML = '00 : 00 : 00 ';
// }

// function displayTimer(){
//     seconds+=1;

//         if(seconds == 60){
//             seconds = 0;
//             minutes++;
//             if(minutes == 60){
//                 minutes = 0;
//                 hours++;
//             }
//         }
    
//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;

//     timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
// }


// //Get Weather

// getWeather= ()=>{
//     let long;
//     let lat;
//     let temp=document.querySelector('.temperature-degree');
//     let degreesSec=document.querySelector('.degrees-section');
//     let tempSpan=document.querySelector('.temperature span');
//     let tempDescription=document.querySelector('.temperature-description');
//     let locationTimezone=document.querySelector('.location-timezone');
//     let icon=document.querySelector('.icon');
    
//     if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition(position =>{
//         lat=Math.floor(position.coords.latitude);
//         long=Math.floor(position.coords.longitude);
        
//         const api=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=65a9b47782bd8d3e80ba45fc5b90369a`;
        
//         fetch(api)
//        .then(response => {
//            return response.json();
//         })
//         .then(data =>{
//           locationTimezone.innerHTML=`${data.name}/${data.sys.country}`;
//           tempDescription.innerHTML=data.weather[0].description;
//           let fahrenheit=(data.main.temp)*(7/5)+32;
//           temp.innerHTML=fahrenheit.toFixed(2);
//           degreesSec.addEventListener('click',()=>{
//             if(tempSpan.innerHTML==='° F'){
//               temp.textContent=data.main.temp;
//               tempSpan.innerHTML=`&#176; C`;
//             }else{
//                 temp.textContent=fahrenheit.toFixed(2);
//                 tempSpan.innerHTML=`&#176; F`;
//             }
//           });
//         });
//       });
//     }
// }