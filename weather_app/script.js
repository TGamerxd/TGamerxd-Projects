const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '25b34e4d8fmsh9884bf09701d42dp136f40jsnc17ef98d70dc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = formatUnixTimestamp(response.sunrise)
            sunset.innerHTML = formatUnixTimestamp(response.sunset)
        })
        .catch(err => console.error(err));
    //new york weather data down    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "New York", options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            tempn.innerHTML = response.temp
            feels_liken.innerHTML = response.feels_like
            humidityn.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_tempn.innerHTML = response.min_temp
            max_tempn.innerHTML = response.max_temp
            wind_speedn.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            // wind_degreesn.innerHTML = response.wind_degrees
            sunrisen.innerHTML = formatUnixTimestamp(response.sunrise)
            sunsetn.innerHTML = formatUnixTimestamp(response.sunset)
        })
        .catch(err => console.error(err));
    //delhi weather down
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "Delhi", options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            tempd.innerHTML = response.temp
            feels_liked.innerHTML = response.feels_like
            humidityd.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_tempd.innerHTML = response.min_temp
            max_tempd.innerHTML = response.max_temp
            wind_speedd.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            // wind_degreesn.innerHTML = response.wind_degrees
            sunrised.innerHTML = formatUnixTimestamp(response.sunrise)
            sunsetd.innerHTML = formatUnixTimestamp(response.sunset)
        })
        .catch(err => console.error(err));
    //tokyo weather down
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "tokyo", options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            tempt.innerHTML = response.temp
            feels_liket.innerHTML = response.feels_like
            humidityt.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_tempt.innerHTML = response.min_temp
            max_tempt.innerHTML = response.max_temp
            wind_speedt.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            // wind_degreesn.innerHTML = response.wind_degrees
            sunriset.innerHTML = formatUnixTimestamp(response.sunrise)
            sunsett.innerHTML = formatUnixTimestamp(response.sunset)
        })
        .catch(err => console.error(err));
    //london weather down
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + "tokyo", options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            templ.innerHTML = response.temp
            feels_likel.innerHTML = response.feels_like
            humidityl.innerHTML = response.humidity
            // humidity2.innerHTML = response.humidity
            min_templ.innerHTML = response.min_temp
            max_templ.innerHTML = response.max_temp
            wind_speedl.innerHTML = response.wind_speed
            // wind_speed2.innerHTML = response.wind_speed
            // wind_degreesn.innerHTML = response.wind_degrees
            sunrisel.innerHTML = formatUnixTimestamp(response.sunrise)
            sunsetl.innerHTML = formatUnixTimestamp(response.sunset)
        })
        .catch(err => console.error(err));
}


const formatUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Lucknow")