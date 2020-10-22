import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MovieCard from '../MovieCard';
import { ContextProvider } from '../../hooks/use-context';

const VISIBLE_STYLE = 'opacity: 1';

beforeEach(() => {
  localStorage.clear();
});

describe('favorites', () => {
  it('renders with no favorites', () => {
    const { favoriteButton } = renderCard();
    expect(favoriteButton).not.toHaveStyle(VISIBLE_STYLE);
  });

  it('renders not favorite', () => {
    const { favoriteButton } = renderCard(false);
    expect(favoriteButton).not.toHaveStyle(VISIBLE_STYLE);
  });

  it('renders favorite', () => {
    const { favoriteButton } = renderCard(true);
    expect(favoriteButton).toHaveStyle(VISIBLE_STYLE);
  });

  it('enables favorite', () => {
    const { favoriteButton } = renderCard();
    userEvent.click(favoriteButton);
    expect(favoriteButton).toHaveStyle(VISIBLE_STYLE);
  });

  it('disables favorite', () => {
    const { favoriteButton } = renderCard(true);
    userEvent.click(favoriteButton);
    expect(favoriteButton).not.toHaveStyle(VISIBLE_STYLE);
  });

  it('disables favorite', () => {
    const { favoriteButton } = renderCard(true);
    userEvent.click(favoriteButton);
    expect(favoriteButton).not.toHaveStyle(VISIBLE_STYLE);
  });
});

it('trims long titles', () => {
  const TITLE = 'Run forest, ruuuuuuuuuuuuuuuun';
  const { getByText, queryByText } = renderCard(undefined, { Title: TITLE });
  expect(getByText(new RegExp(TITLE.substring(0, 10)))).toBeInTheDocument();
  expect(queryByText(new RegExp(TITLE))).toBeNull();
});

function renderCard(favorite, details) {
  const IMDB_ID = '001';
  if (favorite !== undefined) {
    localStorage.setItem(
      'favorites',
      JSON.stringify(favorite ? [IMDB_ID] : [])
    );
  }
  const utils = render(
    <ContextProvider>
      <MovieCard imdbID={IMDB_ID} {...details} />
    </ContextProvider>
  );
  return { ...utils, favoriteButton: utils.getByRole('button') };
}
