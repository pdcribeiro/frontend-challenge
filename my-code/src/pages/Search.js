import React, { useState } from 'react';

import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default function Search() {
  const [searching, setSearching] = useState(false);
  const [movies, setMovies] = useState();
  // const [movies, setMovies] = useState([...Array(20).keys()].map(m => ({id: m})));

  function handleSearch() {
    //TODO fetch movies from API
  }

  return (
    <>
      <SearchBar disabled={searching} onSearch={handleSearch} />
      <SearchResults searching={searching} movies={movies} />
    </>
  );
}
