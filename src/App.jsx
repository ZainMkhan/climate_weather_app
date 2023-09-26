import NavBar from './components/Navbar';
import "./App.css"
import WeatherDisplayCon from './components/WeatherDisplayCon';
import { createContext, useState } from 'react';

export const SelectedCity = createContext();

function App() {
let [selectedCity, setSelectedCity] = useState({
  name: "",
  lat: "",
  lng: "",
});

  return (
    <>
    <SelectedCity.Provider value={[selectedCity, setSelectedCity]}>
    <NavBar />
    <WeatherDisplayCon selectedCity={selectedCity}/>
    </SelectedCity.Provider>
    </>
  )
}

export default App;
