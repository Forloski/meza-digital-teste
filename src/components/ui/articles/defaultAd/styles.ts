import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import ShampooModel from '../../../../assets/shampoo_model.jpg';

export const StyledContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 300px;
  position: relative;
  grid-column: 2;
  grid-row: 3 / span 2;
  @media only screen and (max-width: 559px) {
    grid-column: 1;
    grid-row: span 2;
  }

  div {
    display: block;
  }
`;

export const StyledImg = styled.div`
  background-image: url(${ShampooModel});
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 250px;
`;

export const StyledText = styled(Paper)`
  width: 100%;
  height: fill;
  background-color: #de8e85;
  color: white;
`;
