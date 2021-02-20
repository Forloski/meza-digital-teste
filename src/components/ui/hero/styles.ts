import styled from 'styled-components';
import heroModelImg from '../../../assets/hairmodel_hero.jpg';

export const StyledContainer = styled.div`
  /* Grid styles */
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(782px, 1fr));
  grid-template-rows: auto;
`;

export const StyledHeroModel = styled.img`
  grid-column: 1;
  width: 100%;
  justify-self: center;
`;

StyledHeroModel.defaultProps = {
  src: heroModelImg,
};

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 782px;
  background-color: #de8e85;
  justify-self: center;
  padding-left: 16px;
  color: white;
  justify-content: center;
`;
