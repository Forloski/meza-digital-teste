import React from 'react';
import {
  StyledContainer,
  StyledHeroModel,
  StyledTextContainer,
} from './styles';

const Hero: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeroModel />
      <StyledTextContainer>
        <h2>What is Lorem Ipsum?</h2>
        <h1>Lorem Ipsum is simply dummy text.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default Hero;
