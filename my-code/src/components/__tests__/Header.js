import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

it('renders logo', () => {
  const { getByTitle } = render(<Header />);
  expect(getByTitle('Logo')).toBeInTheDocument();
});
