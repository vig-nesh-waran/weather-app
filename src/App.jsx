import Details from "./components/Details";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      <div className=" text-orange-500 text-3xl font-bold my-4 md:text-4xl">
       <FontAwesomeIcon icon={faSun} className=" mx-3"/>Weather Application
      </div>
      <div className=" flex flex-col w-screen p-5 text-center justify-around items-center md:flex-col-reverse">
        <div className="flex justify-around items-center flex-col my-6">
          <Weather className="lg:w-1/2" />
          <Details className="lg:w-1/2" />
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
