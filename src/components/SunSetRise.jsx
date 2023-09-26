import "./SunSetRise.css";
import IconSunrise from "./IconSunrise";
import IconSunset from "./IconSunset";

function SunSetRise({sunData}){

    const currentTime = new Date();

    function convertUnixTimestampToTime(timestamp, timezoneOffset) {
        const localTime = new Date((timestamp + timezoneOffset) * 1000); // Convert to milliseconds
        const hours = localTime.getHours();
        const minutes = localTime.getMinutes().toString().padStart(2, '0');
        const amPm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format
        return `${formattedHours}:${minutes} ${amPm}`;
    }

    let sunRise = convertUnixTimestampToTime(sunData.sunrise, sunData.timezone);
    let sunSet = convertUnixTimestampToTime(sunData.sunset, sunData.timezone);


    return(<>
        <div className="sun-set-rise-con">

        <div className="sun-rise-con">
        <div className="s-title-con">
        <h1 className="s-tile-heading"> <IconSunrise width={"30px"} height={"30px"} color={"grey"} /> Sunrise</h1>
        </div>
        <div className="s-details-con">
        <h2 className="s-heading">Time for you</h2>
        <h2 className="s-detail-item">{sunRise}</h2>
        </div>
        </div>


        <div className="sun-set-con">
        <div className="s-title-con">
        <h1 className="s-tile-heading"> <IconSunset width={"30px"} height={"30px"} color={"grey"} />Sunset</h1>
        </div>
        <div className="s-details-con">
        <h2 className="s-heading">Time for you</h2>
        <h2 className="s-detail-item">{sunSet}</h2>
        </div>
        </div>
        
        </div>
        </>)
}

export default SunSetRise;