import { useState, useEffect } from "react";
import "./SearchField.css";
import SearchIcon from "./SearchIcon";
import SearchBar from "./SearchBar";

function SearchField({setCityNames,inputRef, setInputRef}){

    


    useEffect(()=>{
        if (inputRef.trim() === "") {
            setCityNames([]);
            return;
          }
        fetch(`http://api.geonames.org/searchJSON?q=${inputRef}&maxRows=6&username=zainm`)
        .then(response => response.json())
        .then(json => setCityNames(json.geonames) )
    }, [inputRef])

    
    return (<>
    <div className="searchCon">
        <SearchBar setInputRef={setInputRef} inputRef={inputRef}/>
        <SearchIcon />
    </div>

    </>)
}


export default SearchField;