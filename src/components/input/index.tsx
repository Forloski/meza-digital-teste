import React from 'react';

import { StyledContainer, StyledInput, StyledSearchIcon } from './styles';

const Input: React.FC = props => {
  return (
    <StyledContainer>
      <StyledInput />
      <StyledSearchIcon />
    </StyledContainer>
  );
};

export default Input;
