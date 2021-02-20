import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: auto;
  align-content: center;
  justify-content: center;
`;

export const StyledIcon = styled(AccountCircleIcon)`
  align-self: center;
  justify-self: center;
  size: 0.94rem;
`;

export const StyledChildrenText = styled.div`
  padding-left: 1vh;
`;
