import React from 'react';
import styled from 'styled-components';

import { GlobalStyle, BREAKPOINT, SPACING } from './style';
import Header from './components/Header';
import Pages from './pages';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Pages />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  padding: 0 ${SPACING};
  margin: auto;

  @media (min-width: ${BREAKPOINT.TABLET}) {
    padding: 0 50px;
  }

  @media (min-width: ${BREAKPOINT.DESKTOP}) {
    padding: 0 130px;
  }
`;
