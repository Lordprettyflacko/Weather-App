//preapre jquery 
$( document ).ready(function() {
    console.log( "ready!" );
});

//make input field 
const $inputField = $("input").prop({id: "searchBar"});
const $searchBar = $("#searchBar");

//make buttons
const $searchButton = $("#submit");

//create empty show name 
//create a function to clear old result cards 
function clear() { 
  const $divResults = $("#card");
  const $weather = $("#weather");
  
  $weather.remove();
  
}

//Have page start with data from random city 
function start() {
  const $list = ['chicago', 'new york', 'paris', 'tokyo'];
  var $random = Math.floor(Math.random()*$list.length);
  console.log($random);
  $.get("https://api.openweathermap.org/data/2.5/weather?q=" +$list[$random] + "&units=imperial&appid=c675534714ff8a930801b0f83cad06e4", (data) => {
    //see if data is visible
    console.log(data);
    //verify obj keys
    console.log(data.name);
    
    const $icon = data.weather[0].icon
    console.log($icon);
    console.log(`src="http://openweathermap.org/img/wn/${$icon}@2x.png"`);
   
    //rebuild card
    const $card = $("#card");
    const $h2 = $(`<h2 class="city">Weather in ${data.name}</h2>`);
    const $weatherDiv = $(`<div id="weather" class="weather">${data.main.temp} °F</div>`)
    const $h1 = $(`<h3 class="card-title"></h3>`);
    const $img = $(`<img class="card-image" src="http://openweathermap.org/img/wn/${$icon}@2x.png"></ul>`);
    const $description = $(`<div class="description">${data.weather[0].description}</div>`);
    const $humidity = $(`<div class="humidity">Humidity: ${data.main.humidity}%</div>`)
    const $wind = $(`<div class="wind">Wind Speed: ${data.wind.speed}km/h</div>`)

    //append card to the body 
    $("body").append($card);
    $card.append($weatherDiv);
    $weatherDiv.append($h2);
    $weatherDiv.append($h1);
    $weatherDiv.append($img);
    $weatherDiv.append($description);
    $weatherDiv.append($humidity);
    $weatherDiv.append($wind);
    clear();
    console.log($card);


});

}
start();


//make search button get data when you click 'search' button
$searchButton.on("click", function(){
    //clear old card
  clear();
  //get data from source
  $.get("https://api.openweathermap.org/data/2.5/weather?q=" + $searchBar.val() + "&units=imperial&appid=c675534714ff8a930801b0f83cad06e4", (data) => {
    //see if data is visible
    console.log(data);
    //verify obj keys
    console.log(data.name);
    
    const $icon = data.weather[0].icon
    console.log($icon);
    console.log(`src="http://openweathermap.org/img/wn/${$icon}@2x.png"`);
   
    //rebuild card
    const $card = $("#card");
    const $h2 = $(`<h2 class="city">Weather in ${data.name}</h2>`);
    const $weatherDiv = $(`<div id="weather" class="weather">${data.main.temp} °F</div>`)
    const $h1 = $(`<h3 class="card-title"></h3>`);
    const $img = $(`<img class="card-image" src="http://openweathermap.org/img/wn/${$icon}@2x.png"></ul>`);
    const $description = $(`<div class="description">${data.weather[0].description}</div>`);
    const $humidity = $(`<div class="humidity">Humidity: ${data.main.humidity}%</div>`)
    const $wind = $(`<div class="wind">Wind Speed: ${data.wind.speed}km/h</div>`)

    //append card to the body 
    $("body").append($card);
    $card.append($weatherDiv);
    $weatherDiv.append($h2);
    $weatherDiv.append($h1);
    $weatherDiv.append($img);
    $weatherDiv.append($description);
    $weatherDiv.append($humidity);
    $weatherDiv.append($wind);
    
    console.log($card);


});

});

//add event listener on 'enter' key
$searchBar.on("keypress", function(e){
    if (e.key === 'Enter') {
        clear();
        $.get("https://api.openweathermap.org/data/2.5/weather?q=" + $searchBar.val() + "&units=imperial&appid=c675534714ff8a930801b0f83cad06e4", (data) => {
          console.log(data);
          console.log(data.name);
          
          const $icon = data.weather[0].icon
          console.log($icon);
          console.log(`src="http://openweathermap.org/img/wn/${$icon}@2x.png"`);
         
      
          const $card = $("#card");
          const $h2 = $(`<h2 class="city">Weather in ${data.name}</h2>`);
          const $weatherDiv = $(`<div id="weather" class="weather">${data.main.temp} °F</div>`)
          const $h1 = $(`<h3 class="card-title"></h3>`);
          const $img = $(`<img class="card-image" src="http://openweathermap.org/img/wn/${$icon}@2x.png"></ul>`);
          const $description = $(`<div class="description">${data.weather[0].description}</div>`);
          const $humidity = $(`<div class="humidity">Humidity: ${data.main.humidity}</div>`)
          const $wind = $(`<div class="wind">Wind Speed: ${data.wind.speed}km/h</div>`)
      
      
          $("body").append($card);
          $card.append($weatherDiv);
          $weatherDiv.append($h2);
          $weatherDiv.append($h1);
          $weatherDiv.append($img);
          $weatherDiv.append($description);
          $weatherDiv.append($humidity);
          $weatherDiv.append($wind);
          
          console.log($card);
        });
    }
});
    
        
    
//ADDONS
//ideas: 
    //starts with weather data of random city
    //handle har to navigate site
    //create card recommening clothing based on weather    






