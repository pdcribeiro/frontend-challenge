import axios from 'axios';

axios.defaults.baseURL = 'http://www.omdbapi.com';
axios.defaults.params = { apikey: process.env.REACT_APP_OMDB_API_KEY };

export function searchMovies(query) {
  return axios
    .get('/', { params: { type: 'movie', s: query } })
    .then(response => response.data.Search ?? [])
    .catch(error => {
      console.error(error);
      return { error };
    });
}
