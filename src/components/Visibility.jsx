import "./Visibility.css";
import { FaEye } from 'react-icons/fa';


function Visibility({visibilityData}){

    let visibility = visibilityData ? (visibilityData / 1000) + " Km" : "N/A"

    return(<>
        <div className="visibility-con">
        <div className="v-title">
        <h1 className="v-title-heading"> <FaEye className="v-icon"/> Visibility</h1>
        </div>
        <div className="v-details-con">
            <h2 className="v-heading">kilometers</h2>
            <h2 className="v-detail-item">{visibility}</h2>
        </div>

        </div>
        </>)
}

export default Visibility;