import { useState, useEffect } from "react";
import "./SearchField.css";
import SearchIcon from "./SearchIcon";
import SearchBar from "./SearchBar";

function SearchField({setCityNames,inputRef, setInputRef}){

    let apiKey = "7e1bed96ede9a1be6d8f0812a6932812";
    let apiSearch = `https://api.openweathermap.org/geo/1.0/direct?q=${inputRef}&limit=5&appid=${apiKey}`



    useEffect(()=>{
        if (inputRef.trim() === "") {
            setCityNames([]);
            return;
          }
        fetch(apiSearch)
        .then(response => response.json())
        .then(json => setCityNames(json) )
    }, [inputRef])

    
    return (<>
    <div className="searchCon">
        <SearchBar setInputRef={setInputRef} inputRef={inputRef}/>
        <SearchIcon />
    </div>

    </>)
}


export default SearchField;