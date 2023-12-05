import { useState } from "react";
import './App.css';
import CountriesApp from "./CountriesApp";

function App() {
  const continents = [
    "https://restcountries.com/v3.1/region/africa",
    "https://restcountries.com/v3.1/region/asia",
    "https://restcountries.com/v3.1/region/europe"
  ];

  const [selectedContinent, setSelectedContinent] = useState('');
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div className="App">
      <select
        id="selectedContinent"
        value={selectedContinent}
        onChange={(e) => setSelectedContinent(e.target.value)}
      >
        <option value="">Select a Continent</option>
        {continents.map((continent, index) => (
          <option key={index} value={continent}>{continent}</option>
        ))}
      </select>
      <button
        onClick={() => setButtonClick(!buttonClick)}
        className="StartButton"
        disabled={!selectedContinent}
      >
        Show Countries
      </button>
      {buttonClick && <CountriesApp continent={selectedContinent} />}
    </div>
  );
}

export default App;
