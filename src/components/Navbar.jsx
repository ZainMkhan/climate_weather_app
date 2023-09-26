import { useState } from "react";
import "./Navbar.css";
import SearchField from "./SearchField";
import SearchList from "./SearchList";
import logo from "../assets/weatherApp.png";
import CurrentLocation from "./CurrentLocation";

function NavBar(){

let [cityNames , setCityNames] = useState([]);
let [inputRef, setInputRef] = useState("");



return (

<div className="nav-con">
<img src={logo} className="logo"/>

<div className="nav-items">
<div className="search">
<SearchField 
    setCityNames={setCityNames} 
    setInputRef={setInputRef}
    inputRef={inputRef}/>
<SearchList 
    cityNames={cityNames}
    setInputRef={setInputRef}/>
</div>
<CurrentLocation />
</div>

</div>

)

}


export default NavBar;