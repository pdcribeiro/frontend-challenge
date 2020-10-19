import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_PREFIX = 'http://www.omdbapi.com/?apikey=' + API_KEY;

export function searchMovies(query) {
  return axios
    .get(`${API_PREFIX}&s=${query}&type=movie&page=2`)
    .then(response => response.data.Search)
    .catch(error => {
      console.error(error);
      return null;
    });
}
