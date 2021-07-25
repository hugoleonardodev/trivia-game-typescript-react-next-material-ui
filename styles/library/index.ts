import { Typography, withStyles } from '@material-ui/core';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiToolbar-root': {
      fontSize: '1.75rem',
    },
    body: {
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    a: {
      width: 'inherit',
      position: 'absolute',
      textDecoration: 'none',
      color: 'transparent',
      padding: '16px',
    },
  },
})(() => null);

export const MaterialIcons = withStyles({
  root: {
    fontFamily: 'Material Icons',
    fontSize: '2rem',
  },
})(Typography);

export const TimelineOppositeContentLeft = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
})(TimelineOppositeContent);

export const TimelineOppositeContentRight = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
})(TimelineOppositeContent);
