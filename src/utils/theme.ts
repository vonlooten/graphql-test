import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple, grey } from '@mui/material/colors';


let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500],
    },
    background: {
    },
    secondary: {
      main: green[500],
    },
  },
});
theme = responsiveFontSizes(theme);


export {theme}