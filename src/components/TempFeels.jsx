import "./TempFeels.css";
import { FaTemperatureHigh, FaThermometerEmpty,FaThermometerFull } from 'react-icons/fa';
import { useState, useEffect } from "react";

function TempFeels({tempData, scale}){

    let [min , setMin] = useState("N/A")
    let [max , setMax] = useState("N/A")

    let minTemp = tempData?.temp_min || "N/A";
    let maxTemp = tempData?.temp_max || "N/A";

    useEffect(() => {
        if(minTemp === "N/A" && maxTemp === "N/A"){
            return;
        }

        if (scale === "Celsius") {
            setMin((minTemp - 273.15).toFixed(0) + "°C" || "");
            setMax((maxTemp - 273.15).toFixed(0) + "°C" || "");
        } else if ((scale === "Fahrenheit")) {
            setMin(((minTemp - 273.15) * 9/5 + 32).toFixed(0) + "°F" || "");
            setMax(((maxTemp - 273.15) * 9/5 + 32).toFixed(0) + "°F" || "");
        }
      }, [scale, tempData]);

    


    return(<>
        <div className="temp-feels-con">

        <div className="t-title">
        <h1 className="t-tile-heading"> <FaTemperatureHigh className="t-icon"/> Temperature Min & Max</h1>
        </div>
        
        <div className="t-details-con">

        <div className="min-detail-con">
            <h1 className="m-heading">Min <FaThermometerEmpty className="m-icon" /></h1>
            <div className="connecting-line"></div>
            <h2 className="m-detail-item">{min}</h2>
        </div>

        <div className="max-detail-con">
            <h1 className="m-heading">Max <FaThermometerFull className="m-icon" /></h1>
            <div className="connecting-line"></div>
            <h2 className="m-detail-item">{max}</h2>
        </div>

        </div>


        </div>
        </>)
}

export default TempFeels;

