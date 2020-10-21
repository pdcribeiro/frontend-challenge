import React from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import Message from './Message';
import LandingImage from '../assets/images/illustration-empty-state.png';
import LandingImage2x from '../assets/images/illustration-empty-state@2x.png';
import { BREAKPOINT } from '../utils/style';

export default function SearchResults({ movies }) {
  if (movies === undefined) {
    return <LandingMessage />;
  }

  if (movies === null) {
    return <Searching />;
  }

  if (Array.isArray(movies)) {
    if (movies.length > 0) {
      return (
        <Grid>
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </Grid>
      );
    }

    return <NoResults />;
  }

  return <Error />;
}

function LandingMessage() {
  return (
    <Message
      image={{
        src: LandingImage,
        srcset: `${LandingImage}, ${LandingImage2x} 2x`,
        alt: "Horse's head",
      }}
      title="Don't know what to search?"
      subtitle="Here's an offer you can't refuse"
    />
  );
}

function Searching() {
  return (
    <Message
      title="Searching..."
      subtitle="I promise it won't take long"
    />
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (min-width: ${BREAKPOINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${BREAKPOINT.DESKTOP}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

function NoResults() {
  return (
    <Message
      title="No movies found"
      subtitle="Guess you're out of luck"
    />
  );
}

function Error() {
  return (
    <Message
      title="An error ocurred"
      subtitle="Ups... Sorry about that"
    />
  );
}
