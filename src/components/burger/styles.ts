import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: auto;
`;

export const StyledChildrenText = styled.div`
  padding-left: 1vh;
`;

export const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: white;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
