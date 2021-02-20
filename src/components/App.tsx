import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/theme';
import Header from './ui/header';
import Hero from './ui/hero';
import Articles from './ui/articles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Articles />
    </ThemeProvider>
  );
};

export default App;
