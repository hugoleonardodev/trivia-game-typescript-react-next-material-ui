import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {
  amber,
  lightGreen,
  red,
  deepPurple,
  cyan,
  yellow,
  blueGrey,
  indigo,
} from '@material-ui/core/colors';

// LIGHT THEME

const lightTheme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: yellow[500],
    },
    error: {
      main: red[500],
    },
    success: {
      main: lightGreen[500],
    },
    warning: {
      main: amber[500],
    },
    info: {
      main: blueGrey[200], // info is used for custom blueGrey background color
    },
  },
});

export const light = responsiveFontSizes(lightTheme);

// DARK THEME

const darkTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: indigo[500],
    },
    error: {
      main: red[500],
    },
    success: {
      main: lightGreen[500],
    },
    warning: {
      main: amber[500],
    },
    info: {
      main: blueGrey[600], // info is used for custom blueGrey background color
    },
  },
});

export const dark = responsiveFontSizes(darkTheme);
