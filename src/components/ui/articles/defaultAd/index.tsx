import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';
import { StyledContainer, StyledText, StyledImg } from './styles';

const DefaultAd: React.FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <StyledContainer>
        <StyledText>
          <h4>Title of Advetisement</h4>
        </StyledText>
        <StyledImg />
      </StyledContainer>
    </StylesProvider>
  );
};

export default DefaultAd;
