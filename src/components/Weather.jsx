import { useContext } from "react";
import { WeatherContext } from "../contextAPI/WeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTemperatureHigh} from "@fortawesome/free-solid-svg-icons";

function Weather() {
  const { weathers } = useContext(WeatherContext);

  return (
    <div className="text-orange-500 p-4 flex-grow lg:flex lg:items-center">
      <center>
        {weathers.main ? (
          <>
            <h2 className="text-2xl font-bold">{weathers.name}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}@4x.png`}
              alt=""
              className="mx-auto"
            />
            <p className="text-md my-1 font-bold">{weathers.weather[0].description}</p>
            <span className="text-lg">
              <FontAwesomeIcon icon={faTemperatureHigh} className="text-orange-500"/> : {weathers.main.temp}°C
            </span>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </center>
    </div>
  );
}

export default Weather;
