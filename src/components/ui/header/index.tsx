import React from 'react';

import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { StylesProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import IDefaultTheme from '../../../interfaces/IDefaultTheme';

import {
  StyledAppBar,
  StyledToolbar,
  StyledLogo,
  StyledCategories,
  StyledBurger,
  StyledInput,
  StyledAccount,
  StyledShoppingBasket,
} from './styles';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme: IDefaultTheme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const Header: React.FC = props => {
  const classes = useStyles();

  return (
    <>
      <StylesProvider injectFirst>
        <HideOnScroll {...props}>
          <StyledAppBar position="fixed">
            <Typography variant="h6">
              <StyledToolbar>
                <StyledLogo href="http://localhost:3000" />

                <StyledBurger>CATEGORIAS</StyledBurger>

                <StyledInput />
                <StyledAccount>ENTRAR</StyledAccount>
                <StyledShoppingBasket />
              </StyledToolbar>
            </Typography>
          </StyledAppBar>
        </HideOnScroll>
      </StylesProvider>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
