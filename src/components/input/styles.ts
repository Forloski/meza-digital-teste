import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

export const StyledContainer = styled(Paper)`
  width: 25vw;
  height: 40px;
  position: relative;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  height: 100%;
  position: absolute;
  right: 5px;
  left: auto;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding-right: 3px;
  z-index: 1;
`;

export const StyledInput = styled(InputBase)`
  display: inline-block;
  width: 97%;
  padding: 5px 30px 5px 5px;
  justify-self: left;
`;
