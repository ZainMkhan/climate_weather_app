import "./SearchList.css";
import { useContext } from "react";
import {SelectedCity} from "../App";


function SearchList({ cityNames , setInputRef }) {

const [selectedCity, setSelectedCity] = useContext(SelectedCity);

function handleClick(city) {
  
  setSelectedCity({
    loaded : true,
    name: city.name,
    lat: city.lat,
    lng: city.lon,
  });
  setInputRef("");
}

  return (
    <ul className="searchListCon">
      {cityNames.map((city, i) => (
        <li onClick={() => handleClick(city)}
        key={i}>{city.name} , {city.country}</li>
      ))}
    </ul>
  );
}

export default SearchList;
