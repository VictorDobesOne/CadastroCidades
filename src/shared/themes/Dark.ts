import { createTheme } from '@mui/material';
import { cyan, pink } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: pink[200],
      dark: pink[400],
      light: pink[100],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  }
});