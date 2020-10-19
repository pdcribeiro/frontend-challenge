import { useState } from 'react';

import useContext from './use-context';

export function useFavorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(window.localStorage.getItem('favorites')) || []
  );

  function toggle(imdbID) {
    setFavorites(favorites => {
      const newFavorites = toggleFavorite(favorites, imdbID);
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }

  function toggleFavorite(favorites, imdbID) {
    const index = favorites.findIndex(id => id === imdbID);
    if (index === -1) {
      return [...favorites, imdbID];
    }
    return [...favorites.slice(0, index), ...favorites.slice(index + 1)];
  }

  function includes(imdbID) {
    return favorites.includes(imdbID);
  }

  return { toggle, includes };
}

export default () => useContext().favorites;
