import React from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import SearchMessage from './SearchMessage';
import EmptyStateImage from '../assets/images/illustration-empty-state.png';
import EmptyStateImage2x from '../assets/images/illustration-empty-state@2x.png';
import { BREAKPOINT } from '../style';

export default function SearchResults({ searching, movies }) {
  if (searching) {
    return <Searching />;
  }

  if (movies === undefined) {
    return <EmptyState />;
  }

  if (movies === null) {
    return <Error />;
  }

  if (Array.isArray(movies) && movies.length === 0) {
    return <NoResults />;
  }

  return (
    <Grid>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </Grid>
  );
}

function Searching() {
  return (
    <SearchMessage
      title="Searching..."
      subtitle="I promise it won't take long"
    />
  );
}

function EmptyState() {
  return (
    <SearchMessage
      image={{
        src: EmptyStateImage,
        srcset: `${EmptyStateImage}, ${EmptyStateImage2x} 2x`,
        alt: "Horse's head",
      }}
      title="Don't know what to search?"
      subtitle="Here's an offer you can't refuse"
    />
  );
}

function Error() {
  return (
    <SearchMessage
      title="An error ocurred"
      subtitle="Ups... Sorry about that"
    />
  );
}

function NoResults() {
  return (
    <SearchMessage
      title="No movies found"
      subtitle="Guess you're out of luck"
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
