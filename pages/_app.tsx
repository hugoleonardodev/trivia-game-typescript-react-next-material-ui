import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { dark } from '../styles/muiThemes';
import { OptionsProvider } from '../core/hooks/useOptions';
import { JssStyles } from '../types/app';
import { PlayerProvider } from '../core/hooks/usePlayer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: JssStyles | null =
      document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={dark}>
        <OptionsProvider>
          <PlayerProvider>
            <Component {...pageProps} router={router} />
          </PlayerProvider>
        </OptionsProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
