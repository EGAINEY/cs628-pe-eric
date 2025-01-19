import React from 'react';
// Import the MovieList.js component that contains the bulk of the functionality, as well as style.css that was defined for the movie cards.
import MovieList from './MovieList';
import './style.css';

function App() {
  return (
    <div className="App">
      {/*'Movies' header*/}
      <h1>Movies:</h1>
      {/*MovieList component renders the list of movies.*/}
      <MovieList />
    </div>
  );
}

export default App;