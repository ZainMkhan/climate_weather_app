import "./WindCon.css";
import { FaWind , FaLocationArrow } from 'react-icons/fa';

function WindCon({windData}){

    let speed = windData?.speed ? windData.speed + " m/s" : "N/A";
    let degree = windData?.deg || "N/A";
    let gust = windData?.gust ? windData.gust + "%" : "N/A";

return (<>
    <div className="windCon">
    <div className="w-title">
    <FaWind className="wind-icon"/>
    <h1> Wind </h1>
    </div>
    <div className="w-details">
        <div className="w-speed">
        <h2 className="w-heading">Speed</h2>
        <h2 className="w-detail">{speed ? speed : "N/A"}</h2>
        </div>
        <div className="w-gust">
        <h2 className="w-heading">Gust</h2>
        <h2 className="w-detail">{gust}</h2>
        </div>
        <div className="w-direction">
        <h2 className="w-heading">Direction</h2>
        <div className="direction-Icon-Con">
        <FaLocationArrow className="direction-Icon" style={{ transform: `rotate(${degree}deg)`}}/>
        </div>
        </div>
    </div>
    </div>
</>)
}

export default WindCon;