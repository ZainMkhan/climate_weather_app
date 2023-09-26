import "./PressureCon.css";
import IconPressure from "./IconPressure";

function PressureCon({pressureData}){

let pressure = pressureData ? pressureData + " hPa" : "N/A";

return(<>
<div className="pressure-con">
<div className="p-title">
<IconPressure width={"30px"} height={"30px"} color={"grey"}/>
<h1>Pressure</h1>
</div>
<div className="p-details-con">
 <h2 className="p-heading">hectopascals</h2>   
<h1 className="p-detail-item">{pressure}</h1>
</div>
</div>
</>)

}


export default PressureCon;