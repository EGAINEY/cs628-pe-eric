import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import './index.css';

export default function App() {
  //State manages the list of cities.
  const [cities, setCities] = useState([]);

  return (
    <Router>
      {/* Header components */}
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>Cities Application</h1>
          {/* Buttons for navigating to the cities list and add city form. */}
          <div className="nav-buttons">
            <Link to="/cities">Cities List</Link>
            <Link to="/addcity">Add City</Link>
          </div>
        </header>
        {/* Line to separate the header components and the render area for cities list and the details. */}
        <div className="separator"></div>
        {/* Routes for the different components. */}
        <Routes>
          <Route path="/cities/*" element={<CitiesList cities={cities} />} />
          <Route path="/addcity" element={<AddCity cities={cities} setCities={setCities} />} />
          <Route path="*" element={<Navigate to="/cities" />} />
        </Routes>
      </div>
    </Router>
  );
}