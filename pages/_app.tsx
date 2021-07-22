import React, { useCallback, useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { light, dark } from '../styles/themes/muiThemes';
import { OptionsProvider } from '../core/hooks/useOptions';
import { JssStyles } from '../types/app';
import { PlayerProvider } from '../core/hooks/usePlayer';
import GlobalCss from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [theme, setTheme] = useState(light);
  const [switchTheme, setSwitchTheme] = useState(false);

  const handleSetTheme = useCallback(
    (isChecked: boolean) => {
      setSwitchTheme(isChecked);
      if (!switchTheme) {
        return setTheme(dark);
      }
      return setTheme(light);
    },
    [setSwitchTheme, switchTheme]
  );

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
      <ThemeProvider theme={theme}>
        <GlobalCss />
        <OptionsProvider
          handleSetTheme={handleSetTheme}
          switchTheme={switchTheme}
        >
          <PlayerProvider>
            <Component {...pageProps} router={router} />
          </PlayerProvider>
        </OptionsProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
