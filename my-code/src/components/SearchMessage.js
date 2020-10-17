import React from 'react';
import styled from 'styled-components';

export default function SearchMessage({ image, title, subtitle }) {
  return (
    <Container>
      {image && <Image {...image} />}
      {title && <h2>{title}</h2>}
      {subtitle && <h4>{subtitle}</h4>}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20vh;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
`;
