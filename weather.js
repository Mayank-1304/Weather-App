const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7ffb88367fmsh38678fa2c09c799p17d0b7jsn18b2a58ee943",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeatherUpdate = (city) => {
  document.getElementById("city_name").innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city,
    option
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
      document.getElementById("feels_like").innerHTML = response.feels_like;
      document.getElementById("humidity").innerHTML = response.humidity;
      document.getElementById("temp").innerHTML = response.temp;
      document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
      document.getElementById("wind_speed").innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(city.value===""){
    alert("Please enter a city")
  }
  else{
    getWeatherUpdate(city.value);
  }
  
});
getWeatherUpdate("Alwar");
