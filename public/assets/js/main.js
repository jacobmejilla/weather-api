console.log('test');

//Function
async function getWeather() {
    try {
        //Get Weather API
        const weather = await fetch('https://api.weatherbit.io/v2.0/current?city_id=6167865&key=4d37f4afdfbb4f1c881dbc2c92ca7831');
        const foobar = await weather.json();
        

        console.log(foobar);

        //Display weather in HTML
        document.querySelector('#city-name').innerHTML = foobar.data[0].city_name + ", Ontario, " + foobar.data[0].country_code;
        document.querySelector('#city-time').innerHTML = "Current Date: " + foobar.data[0].datetime;
        document.querySelector('#city-temp').innerHTML = "Current Temperature: " + foobar.data[0].temp + "°C";
        document.querySelector('#city-desc').innerHTML = "Description: " + foobar.data[0].weather.description;
        document.querySelector('#city-icon').innerHTML = '<img src="' + "https://www.weatherbit.io/static/img/icons/" + foobar.data[0].weather.icon + ".png" + '" alt="Weather Icon" />';

        
    //Errors
    } catch (error) {
        console.log(`error ${error}`);
    }
}
getWeather();