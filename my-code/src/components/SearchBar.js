import { useLocation, useNavigate } from '@reach/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as DisabledMagnifierIcon } from '../assets/images/icon-magnifier-disabled.svg';
import { ReactComponent as MagnifierIcon } from '../assets/images/icon-magnifier-grey.svg';
import { COLOR, TEXT_COLOR, BORDER, SPACING, TRANSITION } from '../utils/style';

export default function SearchBar({ disabled, search, clearMovies }) {
  const [content, setContent] = useState('');
  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userInput = getUserInputFromURL();
    if (userInput) {
      search(parseUserInput(userInput));
      setContent(userInput);
    }
    // eslint-disable-next-line
  }, []);

  function getUserInputFromURL() {
    return new URLSearchParams(location.search).get('q');
  }

  function parseUserInput(userInput) {
    return encodeURIComponent(userInput).replace(/%20/g, '+');
  }

  useEffect(() => {
    if (!getUserInputFromURL()) {
      setContent('');
      clearMovies();
    }
  // eslint-disable-next-line
  }, [location.search]);

  async function handleKeyDown(event) {
    if (event.key === 'Enter' && content) {
      const query = parseUserInput(content);
      await search(query);
      navigate('/movies?q=' + query);
    }
  }

  return (
    <Container disabled={disabled} onClick={() => inputRef.current.focus()}>
      {disabled ? <DisabledMagnifierIcon /> : <MagnifierIcon />}
      <Input
        type="search"
        value={content}
        placeholder="Search movies..."
        disabled={disabled}
        ref={inputRef}
        autoFocus
        onChange={e => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.disabled ? COLOR.GREY : COLOR.WHITE)};
  border-radius: ${BORDER};
  padding-right: 16px;
  margin-bottom: ${SPACING};
  transition: ${TRANSITION};

  svg {
    padding: 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;

  &::placeholder {
    color: ${props =>
      props.disabled ? TEXT_COLOR.DISABLED : TEXT_COLOR.SECONDARY};
    transition: ${TRANSITION};
  }
`;
