import "./WeatherDisplay.css";
import { useEffect} from "react";
import DisplayImg from "./DisplayImg";
import DisplayInfo from "./DisplayInfo";
import DisplayTopbar from "./DisplayTopBar";





function WeatherDisplay({selectedCity , scale, setScale, weatherData, setWeatherData}){


let weatherInfo = {
    cityName : "",
    country : "",
    dt : "", 
    weatherDescription : "",
    sunrise : "",
    sunset : "",
    temp : "",
    icon : "",
    feels : "",
    humid : "",
}

let apiKey = "7e1bed96ede9a1be6d8f0812a6932812"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.lat}&lon=${selectedCity.lng}&appid=${apiKey}`;


useEffect(()=>{
if(selectedCity.lat === ""){
    return;
}
else{
    fetch(apiUrl)
    .then(response => response.json())
    .then(json => setWeatherData({
        loaded: true,
        ...json,
    }));
}

}, [selectedCity])


if(weatherData.loaded){
    weatherInfo = {
        cityName : weatherData.name,
        country : weatherData.sys.country,
        dt : weatherData.dt,
        weatherDescription : weatherData.weather[0].description,
        sunrise: weatherData.sys.sunrise,
        sunset : weatherData.sys.sunset,
        temp : weatherData.main.temp,
        icon : weatherData.weather[0].icon,
        feels : weatherData.main.feels_like,
        humid : weatherData.main.humidity
    }
}



return (<>
<div className="weatherDisplay">
    <DisplayTopbar scale={scale}setScale={setScale}/>
    <div className="display">
    {weatherData.loaded ? (<>
    <DisplayImg imgSrc={weatherData?.weather}/> 
    <DisplayInfo weatherInfo={weatherInfo} scale={scale}/>
    </> ) : <p style={{color : "white"}}>Please Search for Something</p> }
    </div>
    
</div>
</>)
}


export default WeatherDisplay;