import styled from 'styled-components';
import heroModelImg from '../../../assets/hairmodel_hero.jpg';

export const StyledContainer = styled.div`
  /* Grid styles */
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: auto;
`;

export const StyledHeroModel = styled.img`
  grid-column: 1;

  width: 100%;
  height: auto;
  justify-self: center;
  @media only screen and (max-width: 1030px) {
    width: auto;
    height: 100%;
  }
  @media only screen and (max-width: 559px) {
    width: 100%;
    height: auto;
  }
`;

StyledHeroModel.defaultProps = {
  src: heroModelImg,
};

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fill;
  height: 100%;
  background-color: #de8e85;
  justify-self: center;
  padding-left: 16px;
  padding-right: 16px;
  color: white;
  justify-content: center;
`;
