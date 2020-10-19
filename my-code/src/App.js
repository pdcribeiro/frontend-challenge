import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Pages from './pages';
import { GlobalStyle, BREAKPOINT, SPACING } from './style';

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
  padding: ${SPACING} ${SPACING};
  margin: auto;

  @media (min-width: ${BREAKPOINT.TABLET}) {
    padding: ${SPACING} 50px;
  }

  @media (min-width: ${BREAKPOINT.DESKTOP}) {
    padding: ${SPACING} 130px;
  }
`;
