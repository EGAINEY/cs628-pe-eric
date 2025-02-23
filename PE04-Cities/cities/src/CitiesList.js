import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import CityDetails from './CityDetails';

export default function CitiesList({ cities }) {
  return (
    <div>
      {/* Section header */}
      <h3>Cities List:</h3>
      {/* Check if there are cities to display, if not display the message below, otherwise map over them to create the link components and display them in the cities list. */}
      {cities.length === 0 ? (
        <p>No cities added yet. Click the "Add City" to add one.</p>
      ) : (
        <ul className="city-list">
          {cities.map((city) => (
            <li key={city.id}>
              <Link to={`/cities/${city.id}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
      )}

      {/* Render the selected city child component under the cities list. */}
      <Outlet />
      {/* Nested route to display. */}
      <Routes>
        <Route path=":cityId" element={<CityDetails cities={cities} />} />
      </Routes>
    </div>
  );
}