import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as DisabledMagnifierIcon } from '../assets/images/icon-magnifier-disabled.svg';
import { ReactComponent as MagnifierIcon } from '../assets/images/icon-magnifier-grey.svg';
import { COLOR, TEXT_COLOR, SPACING, TRANSITION } from '../style';

export default function SearchBar({ disabled, onSearch }) {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  function handleKeyDown(event) {
    if (event.key === 'Enter' && content) {
      onSearch(content);
      setContent('');
    }
  }

  return (
    <Container disabled={disabled} onClick={() => inputRef.current.focus()}>
      {disabled ? <DisabledMagnifierIcon /> : <MagnifierIcon />}
      <Input
        value={content}
        placeholder="Search movies..."
        disabled={disabled}
        ref={inputRef}
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
  border-radius: 5px;
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
