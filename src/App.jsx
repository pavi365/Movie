import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=ed637239`);
    setMovies(response.data.Search || []);
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
