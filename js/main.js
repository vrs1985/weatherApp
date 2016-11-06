// Thank you for watching
// I can use jquery more for DOM and it will be faster than native javascript

var weatherApp = []; // create global variable
window.onload = function() {
    getInputField();
    clearList();
  };
weatherApp.key = "9fbf2273c5837609a9b47223f9a75d28"; //our API key openweather


function getInputField() { //this function take value, which user write in input field
    document.getElementById('searchSubmit').addEventListener('click', function (event) {
        weatherApp.searchField = document.getElementById('searchField');
        weatherApp.query = "http://api.openweathermap.org/data/2.5/weather?q="+weatherApp.searchField.value+"&units=metric&APPID="+weatherApp.key; // make query
        $.getJSON(weatherApp.query, function (weather) {
            weatherApp.mainName = weather.name; // get city name
            weatherApp.mainCountry = weather.sys.country; // get country
            weatherApp.mainTemp = weather.main.temp; // get temperature
            weatherApp.mainWeather = weather.weather[0].description; // get weather (cloudy, rainy etc.)
            console.log(weatherApp.mainName, ' ', weatherApp.mainCountry, ' ', weatherApp.mainTemp, ' ', weatherApp.mainWeather);
            insertData(weatherApp.mainName, weatherApp.mainCountry, weatherApp.mainTemp, weatherApp.mainWeather);
        });
    });
}

function insertData(name, country, temp, weather) { // insert our data to list
    weatherApp.listItem = document.createElement('li'); // create new list item
    weatherApp.listItem.innerHTML = '<strong>'+name +' '+ country +':</strong> ' + temp.toFixed(1) + '&#176;C, '+weather; // data which need insert
    weatherApp.listItem.classList.add('weather'); // add class name
    document.getElementById('currentWeather').appendChild(weatherApp.listItem); // insert our list item
}

function clearList() {
    document.getElementById('clear').addEventListener('click', function () { // listen event click on but. clear
    let currWeather = document.getElementById('currentWeather');
    while(currWeather.firstChild){ // loop for clean list items
        currWeather.removeChild(currWeather.firstChild); // delete each first child node list item
    }
});
}
