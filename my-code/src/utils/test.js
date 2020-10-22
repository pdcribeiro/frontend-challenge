import axios from 'axios';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const MOVIE = 'The Godfather';
export const QUERY = MOVIE.replace(' ', '+');

export function renderWithRouter(component, { route = '/' } = {}) {
  const history = createHistory(createMemorySource(route));
  return {
    ...render(
      <LocationProvider history={history}>{component}</LocationProvider>
    ),
    history,
  };
}

export function searchMovie(searchBar, results) {
  mockAPISearchCall(results);
  userEvent.type(searchBar, MOVIE);
  fireEvent.keyDown(searchBar, { key: 'Enter' });
}

export function mockAPISearchCall(results) {
  mockAPICall({ data: results ? { Search: results } : {} });
}

export function mockAPICall(response, { resolves = true } = {}) {
  jest.useFakeTimers();
  axios.get.mockImplementation(() => new Promise(waitAndReturn));

  function waitAndReturn(resolve, reject) {
    const action = resolves ? resolve : reject;
    setTimeout(() => action(response), 2000);
  }
}

//FIX unmounted component error
export async function actAllTimers() {
  await act(async () => {
    jest.runAllTimers();
  });
}
