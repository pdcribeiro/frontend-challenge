import axios from 'axios';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '../Search';
import { ContextProvider } from '../../hooks/use-context';
import {
  MOVIE,
  QUERY,
  actAllTimers,
  mockAPICall,
  mockAPISearchCall,
  renderWithRouter,
  searchMovie,
} from '../../utils/test';

jest.mock('axios');

describe('search bar', () => {
  it('renders empty', () => {
    const { searchBar } = renderSearch();
    expect(searchBar.value).toBe('');
  });

  it('renders enabled', () => {
    const { searchBar } = renderSearch();
    expect(searchBar).not.toHaveAttribute('disabled');
  });

  it('disables when searching', async () => {
    const { searchBar } = renderSearch();
    searchMovie(searchBar);
    expect(searchBar).toHaveAttribute('disabled');
    await actAllTimers();
    expect(searchBar).not.toHaveAttribute('disabled');
  });

  it('populates with query value', () => {
    mockAPISearchCall();
    const { searchBar } = renderSearch({ route: '/movies?q=' + QUERY });
    expect(searchBar.value).toBe(MOVIE);
  });
});

describe('search action', () => {
  it('does not search until Enter is pressed', () => {
    renderSearch();
    expect(axios.get).not.toHaveBeenCalled();
  });

  it('searches when Enter is pressed', () => {
    const { searchBar } = renderSearch();
    searchMovie(searchBar);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('ignores Enter when search bar is empty', () => {
    const { searchBar } = renderSearch();
    fireEvent.keyDown(searchBar, { key: 'Enter' });
    expect(axios.get).not.toHaveBeenCalled();
  });

  it('searches when loaded with query value', () => {
    mockAPISearchCall();
    renderSearch({ route: '/movies?q=' + QUERY });
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('changes URL when searching', async () => {
    const { searchBar, history } = renderSearch();
    expect(history.location.search).toBe('');
    searchMovie(searchBar);
    await actAllTimers();
    expect(history.location.search).toBe('?q=' + QUERY);
  });
});

describe('messages', () => {
  it('renders godfather reference', () => {
    const { getByText } = renderSearch();
    expect(getByText(/an offer you can't refuse/)).toBeInTheDocument();
  });

  it('renders searching message', () => {
    const { searchBar, getByText } = renderSearch();
    searchMovie(searchBar);
    expect(getByText(/searching/i)).toBeInTheDocument();
  });

  it('renders empty message', async () => {
    const { searchBar, getByText } = renderSearch();
    searchMovie(searchBar);
    await actAllTimers();
    expect(getByText(/no movies found/i)).toBeInTheDocument();
  });

  it('renders error message', async () => {
    const { searchBar, getByText } = renderSearch();
    mockAPICall('error', { resolves: false });
    userEvent.type(searchBar, MOVIE);
    fireEvent.keyDown(searchBar, { key: 'Enter' });
    await actAllTimers();
    expect(getByText(/error/i)).toBeInTheDocument();
  });
});

describe('movie card grid', () => {
  it('renders movie card grid', async () => {
    const { getAllByAltText } = await renderMovies();
    expect(getAllByAltText(/poster/i)).toHaveLength(3);
  });

  it('redirects when movie card is clicked', async () => {
    const { getAllByAltText, history } = await renderMovies();
    userEvent.click(getAllByAltText(/poster/i)[0]);
    expect(history.location.pathname).toBe('/movies/001');
  });

  async function renderMovies() {
    const RESULTS = [
      { imdbID: '001', Poster: 'http://poster1' },
      { imdbID: '002', Poster: 'http://poster2' },
      { imdbID: '003', Poster: 'http://poster3' },
    ];
    mockAPISearchCall(RESULTS);
    const utils = renderWithRouter(
      <ContextProvider>
        <Search />
      </ContextProvider>,
      { route: '/movies?q=' + QUERY }
    );
    await actAllTimers();
    return utils;
  }
});

function renderSearch(params) {
  const utils = renderWithRouter(<Search />, params);
  return { ...utils, searchBar: utils.getByRole('searchbox') };
}
