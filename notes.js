//Loading notes from localstorage on load
window.onload = ()=>{
  loadNotes();
};

const saveNote=document.querySelector(".add-btn");
 saveNote.addEventListener('click',function(){
    const input = document.querySelector(".input");
  
    if(input.value != ""){
  
      createNote(input.value);
  
      addToLocalStorage(input.value);
  
    }else{
        //Empty input
      throwError();
    }
   
    input.value="";
});

//Create note
function createNote(input){
    const displayJoke = document.querySelector(".display-notes");

    const li=document.createElement('li');
    li.className = 'list-item';
    li.appendChild(document.createTextNode(input));

    const link = document.createElement('a');
    link.className = 'delete-item';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    displayJoke.appendChild(li);
}

//loads notes from storage when window loads
function loadNotes(){
    //gets notes from local storage
    let notes=getNotes();

    notes.forEach(note => {
        createNote(note);
    });
}

//add notes to UI
function add(){
  const input = document.querySelector(".input");
  
  if(input.value != ""){

    createNote(input.value);

    addToLocalStorage(input.value);

  }else{
      //Empty input
    throwError();
  }
 
  input.value="";
}

//Removing tasks
//Event Delegation
const ul=document.querySelector(".list");
    ul.addEventListener('click',(e)=>{
        if(e.target.parentElement.classList.contains('delete-item')){
            e.target.parentElement.parentElement.remove();
          }
        
          removeNotesFromLocalStorage(e.target.parentElement.parentElement);
  });


//Local Storage
//gets notes from localstorage
function getNotes(){
    let notes;

    if(localStorage.getItem('notes') === null){
        notes=[];
    }else{
        notes=JSON.parse(localStorage.getItem('notes'));
    }

    return notes;
}

//Adds to local storage
function addToLocalStorage(note){

    let notes=getNotes();
    notes.push(note);

    localStorage.setItem('notes',JSON.stringify(notes));
}

//remove from local storage
function removeNotesFromLocalStorage(noteItem){
    let notes=getNotes();
    
    notes.forEach(function(note,index){
        if(noteItem.textContent === note){
          notes.splice(index,1);
        }
      });
    
      localStorage.setItem('notes',JSON.stringify(notes));
}

//Error
//Throws error if invalid input
function throwError(){

    let previousNotes = document.querySelector(".previous-notes");
    let notesHeading=document.querySelector('.notes-h1');
    let err=document.querySelector(".display-error");
    let errorPara=document.createElement('p');
    
        errorPara.textContent='Please enter a note';
        err.appendChild(errorPara);
        previousNotes.insertBefore(err,notesHeading);

    let saveBtn=document.querySelector('.add-btn');
        saveBtn.disabled=true;

        setTimeout(function(){
        saveBtn.disabled=false; 
        errorPara.style.display="none";
        err.style.visibility="hidden";
        err.innerHTML="";
        },3000);
    
        err.style.visibility="visible";
    
}
