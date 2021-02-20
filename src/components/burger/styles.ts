import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flexbox;
  flex-direction: row;
  cursor: pointer;
  margin: auto;
  align-content: center;
  justify-content: center;
`;

export const StyledChildrenText = styled.div``;

export const StyledBurger = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;
  justify-content: space-around;
  width: 1.4rem;
  height: 1.1rem;
  margin-top: 3px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.2rem;
    height: 0.125rem;
    border-radius: 10px;
    background: white;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
