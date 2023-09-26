import "./WeatherDisplayCon.css"
import WeatherDisplay from "./WeatherDisplay";
import WeatherItems from "./WeatherItems";
import { useState } from "react";


function WeatherDisplayCon({selectedCity}){

    const [scale, setScale] = useState("Celsius");
    let [weatherData, setWeatherData] = useState({
        loaded: false, 
    });


    return (<>
    <div className="weather-display-con">
        
        <WeatherDisplay 
         selectedCity={selectedCity}
         scale={scale}
         setScale={setScale}
         weatherData={weatherData}
         setWeatherData={setWeatherData}
        />

        <WeatherItems 
         weatherData={weatherData}
         scale={scale}
        />

    </div>
    </>)

}

export default WeatherDisplayCon;