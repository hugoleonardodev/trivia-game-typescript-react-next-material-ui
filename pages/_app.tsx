import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { dark } from '../styles/muiThemes';

interface JssStyles extends Element {
  parentNode: Node & ParentNode;
}
const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: JssStyles | null =
      document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return (
    // <AppCtx.Provider value={sampleAppContext}>
    <>
      <ThemeProvider theme={dark}>
        <CssBaseline />
        {/* <GlobalStyle /> */}
        <Component {...pageProps} router={router} />
      </ThemeProvider>
    </>
    // </AppCtx.Provider>
  );
};

export default MyApp;
