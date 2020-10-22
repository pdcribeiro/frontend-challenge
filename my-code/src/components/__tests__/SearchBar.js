import React from 'react';
import userEvent from '@testing-library/user-event';

import SearchBar from '../SearchBar';
import { renderWithRouter } from '../../utils/test';

it('gets focus on load', () => {
  const { searchBar } = renderSearchBar();
  expect(searchBar).toHaveFocus();
});

it('focuses search bar when container is clicked', () => {
  const { searchBar } = renderSearchBar();
  searchBar.blur();
  expect(searchBar).not.toHaveFocus();
  userEvent.click(searchBar.parentElement);
  expect(searchBar).toHaveFocus();
});

function renderSearchBar() {
  const utils = renderWithRouter(<SearchBar clearMovies={() => {}} />);
  return { ...utils, searchBar: utils.getByRole('searchbox') };
}
