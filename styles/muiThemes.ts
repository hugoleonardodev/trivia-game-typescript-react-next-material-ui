import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {
  amber,
  blue,
  lightGreen,
  red,
  deepOrange,
  deepPurple,
  cyan,
  yellow,
} from '@material-ui/core/colors';

// DARK THEME

const darkTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: deepOrange[500],
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
      main: blue[500],
    },
  },
});

export const dark = responsiveFontSizes(darkTheme);

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
      main: blue[500],
    },
  },
});

export const light = responsiveFontSizes(lightTheme);
