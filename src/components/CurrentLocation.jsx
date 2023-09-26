import React, { useState, useEffect, useContext } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './CurrentLocation.css';
import {SelectedCity} from "../App";



function CurrentLocation() {

const [ selectedCity , setSelectedCity] = useContext(SelectedCity);

  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      lat: '',
      lng: '',
    },
    error: null,
  });
  const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&format=json`;
  useEffect(() => {
    function onSuccess(location) {
      setLocation({
        loaded: true,
        coordinates: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });
    }

    function onError(error) {
      setLocation({
        loaded: true,
        coordinates: {
          lat: '',
          lng: '',
        },
        error: error,
      });
    }

    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation is not supported',
      });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  function handleClick() {
    if (location.error) {
      if (window.confirm('Please enable location in your browser settings and click OK to try again.')) {
        window.location.reload();
      }
    } else {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            setSelectedCity({
              loaded: true,
              name: data.cityName,
              lat : location.coordinates.lat,
              lng : location.coordinates.lng
            });
        })
    }
  }

  return (
    <>
      <div className="currentLocation" onClick={handleClick}>
        <p className='current-heading'>Current Location</p>
        <FaMapMarkerAlt />
      </div>
    </>
  );
}

export default CurrentLocation;
