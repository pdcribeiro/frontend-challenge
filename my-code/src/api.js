import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: { apikey: process.env.REACT_APP_OMDB_API_KEY },
});

export function searchMovies(query) {
  return (
    axiosInstance
      .get('/', { params: { type: 'movie', s: query } })
      .then(response => response.data.Search || [])
      .catch(error => {
        console.error(error);
        return null;
      })
  );
}
