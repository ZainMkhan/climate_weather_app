import NavBar from './components/Navbar';
import "./App.css"
import WeatherDisplayCon from './components/WeatherDisplayCon';
import { createContext, useState } from 'react';
import StartingScreen from "./StartingScreen";

export const SelectedCity = createContext();

function App() {
let [selectedCity, setSelectedCity] = useState({
  loaded: false,
  name: "",
  lat: "",
  lng: "",
});

  return (
    <>
    <SelectedCity.Provider value={[selectedCity, setSelectedCity]}>
    <NavBar />
    {selectedCity.loaded ? <WeatherDisplayCon selectedCity={selectedCity}/> : <StartingScreen/>}
    </SelectedCity.Provider>
    </>
  )
}

export default App;
