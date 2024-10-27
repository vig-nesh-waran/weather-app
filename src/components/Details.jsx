import { useContext } from "react";
import { WeatherContext } from "../contextAPI/WeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faThermometerHalf, 
  faTint, 
  faCompressArrowsAlt, 
  faWind 
} from "@fortawesome/free-solid-svg-icons";

function Details() {
  const { weathers } = useContext(WeatherContext);

  return (
    <div className=" text-white p-4 flex flex-col w-full justify-between items-center"> 
        {weathers.main ? (
          <>
            <div className="flex gap-5 mt-0">
              <span className="text-md">
                <FontAwesomeIcon icon={faThermometerHalf} className="text-orange-500"/> : {weathers.main.feels_like}°C
              </span>
              <span className="text-md">
                <FontAwesomeIcon icon={faTint} className="text-orange-500"/> : {weathers.main.humidity}%
              </span>
            </div>
            <div className="flex gap-5 mt-1">
              <span className="text-md">
                <FontAwesomeIcon icon={faCompressArrowsAlt} className="text-orange-500"/> : {weathers.main.pressure} hPa
              </span>
              <span className="text-md">
                <FontAwesomeIcon icon={faWind} className="text-orange-500"/> : {weathers.wind.speed} m/s
              </span>
            </div>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
    </div>
  );
}

export default Details;
