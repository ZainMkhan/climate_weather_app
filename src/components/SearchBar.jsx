import "./SearchBar.css"
function SearchBar({inputRef , setInputRef}){

const handleChange = (e) =>{
        setInputRef(e.target.value);

}

return (<>
        <input 
        type="text"  
        placeholder="Type Somethings..."
        className="searchBar"
        value={inputRef}
        onChange={handleChange}
        />
</>)

}


export default SearchBar;