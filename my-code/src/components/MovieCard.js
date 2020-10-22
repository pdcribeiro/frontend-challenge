import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import { ReactComponent as FullHeartIcon } from '../assets/images/icon-heart-full.svg';
import { ReactComponent as HeartIcon } from '../assets/images/icon-heart-white.svg';
import useFavorites from '../hooks/use-favorites';
import { COLOR, TEXT_COLOR, BORDER, TRANSITION } from '../utils/style';

const MAX_TITLE_LENGTH = 24;

export default function MovieCard({ Title, Year, imdbID, Poster }) {
  const favorites = useFavorites();

  function handleToggleFavorite(event) {
    favorites.toggle(imdbID);
    event.preventDefault();
  }

  const title =
    Title?.length > MAX_TITLE_LENGTH
      ? Title.substring(0, MAX_TITLE_LENGTH) + '...'
      : Title;
  return (
    <Link to={'/movies/' + imdbID}>
      <Figure>
        {Poster && <Image src={Poster} alt="Movie poster" />}
        <OverlayContainer>
          <Overlay />
          <FavoriteButton
            style={{ opacity: favorites.includes(imdbID) && 1 }}
            onClick={handleToggleFavorite}
          >
            {favorites.includes(imdbID) ? <FullHeartIcon /> : <HeartIcon />}
          </FavoriteButton>
          {title && (
            <Details>
              <h3>{title}</h3>
              {Year}
            </Details>
          )}
        </OverlayContainer>
      </Figure>
    </Link>
  );
}

const Figure = styled.figure`
  padding-bottom: 145%;
  margin: 0;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${BORDER};
  object-fit: cover;
  position: absolute;
`;

const OverlayContainer = styled.div`
  &:hover {
    > * {
      opacity: 1;

      &:first-child {
        opacity: 0.9;
      }
    }
  }

  > * {
    opacity: 0;
    position: absolute;
    transition: ${TRANSITION};
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.GREY};
  border-radius: 2px;
`;

const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  top: 12px;
  right: 12px;
  cursor: pointer;

  svg {
    display: block;
  }
`;

const Details = styled.figcaption`
  color: ${TEXT_COLOR.DEFAULT};
  padding: 12px;
  bottom: 0;
`;
