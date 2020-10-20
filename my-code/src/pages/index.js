import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import Search from './Search';
import Detail from './Detail';
import Message from '../components/Message';
import { ContextProvider } from '../hooks/use-context';

export default function Pages() {
  return (
    <ContextProvider>
      <Router>
        <Main path="/">
          <Search path="/" />
          <Search path="search" />
          <Detail path="movies/:movieId" />
          <NotFound default />
        </Main>
      </Router>
    </ContextProvider>
  );
}

const Main = styled.main``;

function NotFound() {
  return (
    <Message
      title="404 Not found"
      subtitle="Ups... Sorry about that"
    />
  );
}
