import "./DisplayTopBar.css";
import BackGroundFIcon from "./BackGroundFIcon";
import BackGroundCIcon from "./BackGroundCIcon";
import { useRef, useState } from "react";

function DisplayTopbar({scale ,setScale}){

 const [isActive, setIsActive] = useState(false);
let inScale = scale;
let btnContent = useRef();
    
    function handleClick() {
        if (inScale === "Celsius") {
            setIsActive(true)
            setScale("Fahrenheit");
        } else {
            setIsActive(false)
            setScale("Celsius");
           
        }
    }

return (<>
<div className="topBtn">
    <h1 className="heading-now">Now</h1>
    <div className="cToFCon">
    <input type="checkbox" id="celciusToFahrenheit"/>
    <label className={`c-To-F ${isActive ? 'active' : ''}`} htmlFor="celciusToFahrenheit" ref={btnContent} onClick={handleClick}>
        <div className="icon-con">
        <BackGroundCIcon width={"25px"} height={"25px"}/>
        <BackGroundFIcon width={"25px"} height={"25px"} />
        </div>
    </label>
    </div>
    </div>
</>)
}


export default DisplayTopbar;