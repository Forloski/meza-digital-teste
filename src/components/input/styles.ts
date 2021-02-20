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
  pointer-events: none;
  align-items: center;
  justify-content: center;
  padding-right: 3px;
`;

export const StyledInput = styled(InputBase)`
  display: inline-block;
  width: 97%;
  padding-right: 30px;
  padding-left: 5px;
  justify-self: left;
`;
