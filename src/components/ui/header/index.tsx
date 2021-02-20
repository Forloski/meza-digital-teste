import React from 'react';

import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { StylesProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {
  StyledAppBar,
  StyledToolbar,
  StyledLogo,
  StyledBurger,
  StyledInput,
  StyledAccount,
  StyledShoppingBasket,
  ToolbarOffset,
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

const Header: React.FC = props => {
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
      <ToolbarOffset />
    </>
  );
};

export default Header;
