import React from 'react';
import { useParams } from 'react-router-dom';

export default function CityDetails({ cities }) {
  //Get the cityId.
  const { cityId } = useParams();
  //Use the cityId to retrieve the city.
  const city = cities.find((c) => c.id.toString() === cityId);

  //If the city is not found, display the message below. Should only occur if someone manipulates the route in the url or on initial load.
  if (!city) {
    return <div className="city-details">City not found.</div>;
  }

  //Display the city's details.
  return (
    <div className="city-details">
      <h3>{city.name} Details:</h3>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
    </div>
  );
}
