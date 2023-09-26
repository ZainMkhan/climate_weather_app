import "./CloudsCon.css";
import { FaCloud } from 'react-icons/fa';

function CloudsCon({cloudsData}){

    let clouds = cloudsData ? cloudsData + " %" : "N/A"

    return(<>
        <div className="clouds-con">
        <div className="c-title">
        
        <h1 className="c-title-heading"> <FaCloud className="c-icon"/> Clouds</h1>
        </div>
        <div className="c-details-con">
        <h2 className="c-heading">percentage</h2>
        <h2 className="c-detail-item">{clouds}</h2>
        </div>

        </div>
        </>)

}

export default CloudsCon;

