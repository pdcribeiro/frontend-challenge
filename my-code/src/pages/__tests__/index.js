import React from 'react';

import Pages from '..';
import { renderWithRouter } from '../../utils/test';

it('renders search page', () => {
  const { getByRole } = renderWithRouter(<Pages />, { route: '/movies' });
  expect(getByRole('searchbox')).toBeInTheDocument();
});

it('renders movie page', () => {
  const { getByText } = renderWithRouter(<Pages />, { route: '/movies/12345' });
  expect(getByText(/detail/i)).toBeInTheDocument();
});

it('renders error page', () => {
  const { getByText } = renderWithRouter(<Pages />, { route: '/not-found' });
  expect(getByText(/not found/i)).toBeInTheDocument();
});
