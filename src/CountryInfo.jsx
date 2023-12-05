



import React from 'react';

const CountryInfo = ({ country }) => {
  const { name, capital, population, flags } = country;

  return (
    <div>
      <h2>{name.common}</h2>
      <img src={flags.svg} alt={`Flag of ${name.common}`} />
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default CountryInfo;
