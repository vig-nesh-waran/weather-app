import { useContext } from "react";
import { WeatherContext } from "../contextAPI/WeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const { place, setPlace, setSearchPlace } = useContext(WeatherContext);

  const placeHandle = (e) => {
    e.preventDefault();
    setPlace(e.target.value);
  };

  const handleSearch = (e) => {
      e.preventDefault();
      if (place && typeof place === "string") {
        setSearchPlace(place);
        setPlace('')
      }
  };

  return (
    <div className="flex items-center justify-center w-screen px-10 h-1/2 lg:max-w-xl md:max-w-xl">
      <form onSubmit={handleSearch} className="w-screen">
        <input
          type="text"
          value={place || ""}
          onChange={placeHandle}
          placeholder="Enter city name..."
          className="flex-grow focus:outline-none h-10 w-9/12 text-gray-700 px-3 py-1 rounded-md focus:ring-2 focus:ring-orange-600"
        />
        <button type="submit" className=" ml-4 h-10 w-10 text-white rounded-full bg-orange-500">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
