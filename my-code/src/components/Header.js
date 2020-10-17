import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { SPACING } from '../style';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: ${SPACING} 0;
`;
