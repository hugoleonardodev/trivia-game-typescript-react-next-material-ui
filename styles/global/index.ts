import { withStyles } from '@material-ui/core';

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiToolbar-root': {
      fontSize: '1.75rem',
    },
    body: {
      fontSize: '1.75rem',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      alignItems: 'center',
    },
  },
})(() => null);

export default GlobalCss;
