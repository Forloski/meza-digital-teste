import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';
import { StyledContainer, StyledInput, StyledSearchIcon } from './styles';

const Input: React.FC = props => {
  return (
    <StylesProvider injectFirst>
      <StyledContainer>
        <StyledInput placeholder="O que você procura?" />
        <StyledSearchIcon />
      </StyledContainer>
    </StylesProvider>
  );
};

export default Input;
