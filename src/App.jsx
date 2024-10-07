import { useState } from "react";
import apiKey from "./api";
import axios from "axios";
import Weather from "./components/Weather";

import Search from "./components/Search";
import "./index.css";
function App() {
  const [weather, setWeather] = useState(null);
  async function handleSearch(search) {
    const [lat, lon] = search.value.split(" ");
    const [city, countryCode] = search.label.split(",");

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.request(url);
      setWeather({ city: city, countryCode: countryCode, ...response.data });
      console.log(weather);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 font-sans  ">
        <Search handleSearch={handleSearch} />
        {weather && <Weather weather={weather} />}
      </div>
    </>
  );
}

export default App;
