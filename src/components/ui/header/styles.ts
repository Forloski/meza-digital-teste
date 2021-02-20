import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Burger from '../../burger';
import Input from '../../input';

import logo from '../../../assets/logo.svg';

export const StyledAppBar = styled(AppBar)``;

export const StyledToolbar = styled(Toolbar)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1vh;
  align-items: center;
  text-align: center;
  padding: 0;
`;

export const StyledLogo = styled.a`
  width: 114px;
  height: 23px;
  display: block;
  text-indent: -9999px;
  margin: 0;
  align-self: center;
  justify-self: center;
  background-image: url('${logo}');
  background-size: 114px;
  background-repeat: no-repeat;
  grid-column: 2;
`;

export const StyledCategories = styled.div`
  grid-column: 3;
`;

export const StyledBurger = styled(Burger)`
  color: white;
  background-color: red;
`;

export const StyledInput = styled(Input)`
  grid-column: 4;
`;
