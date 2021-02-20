import React from 'react';
import { StyledContainer, StyledIcon, StyledChildrenText } from './styles';

const Account: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledIcon />
      <StyledChildrenText>{children}</StyledChildrenText>
    </StyledContainer>
  );
};

export default Account;
