import "./WeatherItems.css";
import WindCon from "./WindCon";
import PressureCon from "./PressureCon";
import Visibility from "./Visibility";
import TempFeels from "./TempFeels";
import SunSetRise from "./SunSetRise";
import CloudsCon from "./CloudsCon";



function WeatherItems({weatherData, scale}){

let windData = weatherData?.wind || "";
let pressureData = weatherData?.main?.pressure || "";
let visibilityData = weatherData?.visibility || "";
let cloudsData = weatherData?.clouds?.all || "";
let tempData = weatherData?.main || "";
let sunData = {
    timezone : weatherData?.timezone,
    sunrise : weatherData?.sys?.sunrise,
    sunset : weatherData?.sys?.sunset,
};




return (<>
        <div className="weather-items-con">
            <div className="weather-items">
                <WindCon windData={windData}/>
                <PressureCon pressureData={pressureData}/>
                <Visibility visibilityData={visibilityData}/>
                <SunSetRise sunData ={sunData}/>
                <CloudsCon cloudsData={cloudsData} />
                <TempFeels scale={scale} tempData={tempData}/>
            </div>
        </div>
</>)
}

export default WeatherItems;