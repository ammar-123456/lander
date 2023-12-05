import React, { useState, useEffect } from 'react';
import CountryInfo from './CountryInfo';

const CountriesApp = ({ continent }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showCountryInfo, setShowCountryInfo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(continent);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchData();
  }, [continent]);

  return (
    <div>
      <select
        id="selectedCountry"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select a Country</option>
        {countries.map((country) => (
          <option key={country.cca3} value={country.cca3}>
            {country.name.common}
          </option>
        ))}
      </select>
      <button
        onClick={() => setShowCountryInfo((prevShowCountryInfo) => !prevShowCountryInfo)}
        disabled={!selectedCountry}
      >
        Toggle Country Info
      </button>
      {showCountryInfo && <CountryInfo country={countries.find((c) => c.cca3 === selectedCountry)} />}
    </div>
  );
};

export default CountriesApp;


