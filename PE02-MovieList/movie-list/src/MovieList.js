import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props);
    //Initialize the state with an array of movies. Set the default filter value to 'All Genres'. Added a 4th property for movie cover art.
    this.state = {
      movies: [
        { title: 'No Country for Old Men', genre: 'Crime Drama', releaseYear: 2007, imageUrl: require('./images/NoCountryForOldMen.PNG') },
        { title: 'The Patriot', genre: 'War Epic', releaseYear: 2000, imageUrl: require('./images/ThePatriot.PNG') },
        { title: 'Troy', genre: 'Action Drama', releaseYear: 2004, imageUrl: require('./images/Troy.PNG') },
        { title: 'Black Hawk Down', genre: 'Historical Epic', releaseYear: 2001, imageUrl: require('./images/BlackHawkDown.PNG') }
      ],
      filter: 'All Genres'
    };
  }

  //When the movie filter value is changed, this updates the filter state.
  filterMovies = (event) => {
    this.setState({ filter: event.target.value });
  }
  
  //Return All Genres, unless a filter is selected.
  filteredMovies() {
    const { filter, movies } = this.state;
    return filter === 'All Genres' ? movies : movies.filter(movie => movie.genre === filter);
  }


  render() {
    const { filter } = this.state;
    //Create the array of unique genres from the movies array.
    const uniqueGenres = ['All Genres', ...new Set(this.state.movies.map(movie => movie.genre))];
    return (
      <div>
        <label htmlFor="genre-select" style={{marginRight: '10px'}}>Select a Genre:</label>
        {/*Select element that allows the user to choose a movie.*/}
        <select onChange={this.filterMovies} value={filter}> {
          uniqueGenres.map(genre => (<option key={genre} value={genre}>{genre}</option>))
        }
        </select>
        {/*Render the list of movies with "onClick" to create the alert when a movie is clicked.*/}
        <ul>
          {this.filteredMovies().map(movie => (
            <li key={movie.title} onClick={() => alert(`You clicked on: "${movie.title}"`)}>
                <img src={movie.imageUrl} alt={`Cover for ${movie.title}`} style={{ width: '100px', height: '150px' }} />
                <div>
                    <div className="detail"><label>Title:</label> {movie.title}</div><br/>
                    <div className="detail"><label>Genre:</label> {movie.genre}</div><br/>
                    <div className="detail"><label>Year:</label> {movie.releaseYear}</div><br/>
                </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MovieList;