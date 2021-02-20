import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#143c8d';
const arcOrange = '#FFBA60';

export default createMuiTheme({
  palette: {
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
});
