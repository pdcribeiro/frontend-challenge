import React, { useState } from 'react';

import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import * as api from '../utils/api';

// eslint-disable-next-line
const TEST_SEARCH_RESULTS = [
  {
    Title: 'No Country for Old Men',
    Year: '2007',
    imdbID: 'tt0477348',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg',
  },
  {
    Title: 'The 40-Year-Old Virgin',
    Year: '2005',
    imdbID: 'tt0405422',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTNjYTA1NDMtZGZmZi00MTdiLThjZTMtZWU1MGYyZjZkNzgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Old School',
    Year: '2003',
    imdbID: 'tt0302886',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzI4NDIzMDgtNGNkZi00MTI2LWJhYzgtYzM5NThhMTQ0OGIzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Old Guard',
    Year: '2020',
    imdbID: 'tt7556122',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
  },
  {
    Title: 'Arsenic and Old Lace',
    Year: '1944',
    imdbID: 'tt0036613',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDVlNTBjMjctNjAzNS00ZGJhLTg2NzMtNzIwYTIzYTBiMDkyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
  },
  {
    Title: 'Grumpy Old Men',
    Year: '1993',
    imdbID: 'tt0107050',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMzNiYzQyNGEtYjFiOS00OTcyLTg5YzItMDQ2ZGRmZjE1N2Y4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Old Man & the Gun',
    Year: '2018',
    imdbID: 'tt2837574',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTk3NjU5MjIxM15BMl5BanBnXkFtZTgwNjU0OTU2NTM@._V1_SX300.jpg',
  },
  {
    Title: 'The 100 Year-Old Man Who Climbed Out the Window and Disappeared',
    Year: '2013',
    imdbID: 'tt2113681',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDUyMzU5MTk5MF5BMl5BanBnXkFtZTgwNjcxNDQxNTE@._V1_SX300.jpg',
  },
  {
    Title: 'Old Dogs',
    Year: '2009',
    imdbID: 'tt0976238',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjExMTYyMzk3MV5BMl5BanBnXkFtZTcwMzI2Njg0Mg@@._V1_SX300.jpg',
  },
  {
    Title: 'They Shall Not Grow Old',
    Year: '2018',
    imdbID: 'tt7905466',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg',
  },
];

export default function Search() {
  // const [movies, setMovies] = useState(TEST_SEARCH_RESULTS);
  const [movies, setMovies] = useState();

  async function search(query) {
    setMovies(null);
    return api.searchMovies(query).then(setMovies);
  }

  function clear() {
    setMovies(undefined);
  }

  return (
    <>
      <SearchBar
        disabled={movies === null}
        search={search}
        clearMovies={clear}
      />
      <SearchResults movies={movies} />
    </>
  );
}
