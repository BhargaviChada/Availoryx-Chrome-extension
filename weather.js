// //Get Weather
const getWeather=document.querySelector('.get-weather');
  getWeather.addEventListener('click',()=>{
    let long;
    let lat;
    let temp=document.querySelector('.temperature-degree');
    let degreesSec=document.querySelector('.degrees-section');
    let tempSpan=document.querySelector('.temperature span');
    let tempDescription=document.querySelector('.temperature-description');
    let locationTimezone=document.querySelector('.location-timezone');
    let icon=document.querySelector('.icon');
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        lat=Math.floor(position.coords.latitude);
        long=Math.floor(position.coords.longitude);
        
        const api=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=putYourKeyHere`;
        
        fetch(api)
       .then(response => {
           return response.json();
        })
        .then(data =>{
          locationTimezone.innerHTML=`${data.name}/${data.sys.country}`;
          tempDescription.innerHTML=data.weather[0].description;
          let fahrenheit=(data.main.temp)*(7/5)+32;
          temp.innerHTML=fahrenheit.toFixed(2);
          degreesSec.addEventListener('click',()=>{
            if(tempSpan.innerHTML==='° F'){
              temp.textContent=data.main.temp;
              tempSpan.innerHTML=`&#176; C`;
            }else{
                temp.textContent=fahrenheit.toFixed(2);
                tempSpan.innerHTML=`&#176; F`;
            }
          });
        });
      });
    }
});