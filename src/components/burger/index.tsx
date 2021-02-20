import React from 'react';
import { StyledBurger, StyledContainer, StyledChildrenText } from './styles';

const Burger: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledBurger>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledChildrenText>{children}</StyledChildrenText>
    </StyledContainer>
  );
};

export default Burger;
