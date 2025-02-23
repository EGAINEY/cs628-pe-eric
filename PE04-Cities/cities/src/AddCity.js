import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCity({ cities, setCities }) {
  //useNavigate to navigate based on user actions.
  const navigate = useNavigate();

  //State variables hold the properties for a city.
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');

  //Handle the form submission for adding a city.
  const handleSubmit = (e) => {
    //No refresh
    e.preventDefault();
    //New city object.
    const newCity = { id: cities.length + 1, name, country, population };
    //Add the new city object to cities list.
    setCities([...cities, newCity]);
    //Navigate back to the Cities List.
    navigate('/cities');
  };

  //The form for adding a new city that collects the city's properties.
  return (
    <div>
      <h3>Add City:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="City Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Country" required value={country} onChange={(e) => setCountry(e.target.value)} />
        <input type="text" placeholder="Population" required value={population} onChange={(e) => setPopulation(e.target.value)} />
        <button className="add-button" type="submit">Add City</button>
      </form>
    </div>
  );
}
