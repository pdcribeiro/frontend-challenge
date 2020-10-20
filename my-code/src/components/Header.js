import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { SPACING } from '../utils/style';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo title="Logo" />
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  margin-bottom: ${SPACING};
`;
