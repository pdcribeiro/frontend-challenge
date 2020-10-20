import React from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import Message from './Message';
import { BREAKPOINT } from '../style';

export default function SearchResults({ movies }) {
  if (movies === undefined) {
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
