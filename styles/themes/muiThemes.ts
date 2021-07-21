import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {
  amber,
  lightGreen,
  red,
  deepOrange,
  deepPurple,
  cyan,
  yellow,
  grey,
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
      main: grey[300], // info is used for custom grey
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
      main: grey[300], // info is used for custom grey
    },
  },
});

export const light = responsiveFontSizes(lightTheme);
