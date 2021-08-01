//Gets Jokes

const getJoke=document.querySelector('.get-joke');
  getJoke.addEventListener('click',function(){
      const displayJoke = document.querySelector(".display-joke");
      const url = "https://api.chucknorris.io/jokes/random";
      fetch(url)
      .then(response=>{
          return response.json()
      })
      .then(responseData=>{
          //console.log("response", responseData);
          displayJoke.innerHTML = responseData.value;
      })
  });