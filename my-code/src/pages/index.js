import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import Search from './Search';
import Detail from './Detail';
import NotFound from './NotFound';

export default function Pages() {
  return (
    <Router>
      <Main path="/">
        <Search path="/" />
        <Detail path="movies/:movieId" />
        <NotFound default />
      </Main>
    </Router>
  );
}

const Main = styled.main``;
