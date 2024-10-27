import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create the context
export const WeatherContext = createContext();

// Create the provider component
export const WeatherProvider = ({ children }) => {
  const [place, setPlace] = useState("");
  const [searchPlace, setSearchPlace] = useState('tirunelveli');
  const [weathers, setWeathers] = useState({});

  // Fetch weather data when searchPlace changes
  useEffect(() => {
    const API = import.meta.env.VITE_WEATHER_API;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=${API}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeathers(data))
      .catch((error) => console.error('Error fetching weather data:', error));
  }, [searchPlace]);

  // Context value that will be provided to components
  const value = {
    place,
    setPlace,
    searchPlace,
    setSearchPlace,
    weathers,
    setWeathers
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

// Define prop types for the WeatherProvider component
WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
