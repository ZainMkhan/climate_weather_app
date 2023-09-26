import "./SearchList.css";
import { useContext } from "react";
import {SelectedCity} from "../App";


function SearchList({ cityNames , setInputRef }) {


const [selectedCity, setSelectedCity] = useContext(SelectedCity);

function handleClick(city) {
  
  setSelectedCity({
    name: city.name,
    lat: city.lat,
    lng: city.lng,
  });
  setInputRef("");
}

  return (
    <ul className="searchListCon">
      {cityNames.map((city) => (
        <li onClick={() => handleClick(city)}
        key={city.geonameId}>{city.name}</li>
      ))}
    </ul>
  );
}

export default SearchList;
