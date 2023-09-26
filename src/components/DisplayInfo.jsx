import "./DisplayInfo.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from "react";
import IconHumid from "./IconHumid";

function DisplayInfo({ weatherInfo, scale }) {
  
  const [temp, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");


  useEffect(() => {

    if (scale === "Celsius") {
      setTemp((weatherInfo?.temp - 273.15).toFixed(0) + "°C" || "");
      setFeelsLike((weatherInfo?.feels - 273.15).toFixed(0) + "°C" || "");
    } else if ((scale === "Fahrenheit")) {
      setTemp(((weatherInfo?.temp - 273.15) * 9/5 + 32).toFixed(0) + "°F" || "");
      setFeelsLike(((weatherInfo?.feels - 273.15) * 9/5 + 32).toFixed(0) + "°F" || "");
    }
  }, [scale, weatherInfo]);


  let weatherDescription = weatherInfo?.weatherDescription || "";
  let city = weatherInfo?.cityName || "";
  let country = weatherInfo?.country || "";
  let currentDt = weatherInfo?.dt || "";
  let sunrise = weatherInfo?.sunrise || "";
  let sunset = weatherInfo?.sunset || "";
  let timeOfTheDay = currentDt >= sunrise && currentDt <= sunset ? "Day-Time" : "Night-Time";
  let icon = weatherInfo?.icon || "";
  let iconUrl = <img className="description-icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />;
  let humidity = weatherInfo? weatherInfo.humid + "%" : "N/A";
  

  return (
    <>
      <div className="info-con">
        <div className="temp-heading-con">
        <h1 className="main-temp-heading">{temp}</h1>
        <h6 className="mini-temp-heading">feels like : {feelsLike}</h6>
        </div>
        <h2 className="description">{weatherDescription}{iconUrl}</h2>
        <h3 className="address"><FaMapMarkerAlt className="icon" />&nbsp;{city}{country ? (" , " + country) : ""}</h3>
        <h4>Currently {timeOfTheDay}</h4>
        <div className="main-humid-con">
        <div className="humid-con">
          <h2 className="humid-heading">Humidity <IconHumid width={"30px"} height={"30px"}/></h2>
          <h2>{humidity}</h2>
        </div>
        </div>
      </div>
    </>
  );
}

export default DisplayInfo;
