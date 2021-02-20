import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import Burger from './burger';
import Input from './input';
import Account from './account';

import logo from '../../../assets/logo.svg';

export const StyledAppBar = styled(AppBar)``;

export const StyledToolbar = styled(Toolbar)`
  display: grid;
  min-height: 62px;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1vh;
  align-items: center;
  text-align: center;
  padding: 0;
`;

export const StyledLogo = styled.a`
  width: 174px;
  height: 36px;
  display: block;
  position: relative;
  text-indent: -9999px;
  margin: 0;
  align-self: center;
  justify-self: center;
  background-image: url('${logo}');
  background-size: 100%;
  background-repeat: no-repeat;
  grid-column: 2;
`;

export const StyledBurger = styled(Burger)`
  color: white;
  grid-column: 3;
`;

export const StyledInput = styled(Input)`
  grid-column: 4;
  font-size: 4px;
`;

export const StyledAccount = styled(Account)`
  grid-column: 5;
`;

export const StyledShoppingBasket = styled(ShoppingBasketIcon)`
  grid-column: 6;
  cursor: pointer;
  color: #00bfdf;

  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`;

export const ToolbarOffset = styled.div`
  height: 62px;
`;
