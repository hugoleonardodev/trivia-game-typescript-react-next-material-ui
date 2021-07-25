import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { light, dark } from '../styles/themes/muiThemes';
import { JssStyles } from '../types/app';
import { OptionsProvider } from '../core/hooks/useOptions';
import { PlayerProvider } from '../core/hooks/usePlayer';
import { GlobalCss } from '../styles/library';
import { setLocalStorage } from '../services';
import DisplayFooter from '../components/DisplayFooter';
import { getRouteTruthy } from '../common/helpers';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [theme, setTheme] = React.useState(light);

  const [switchTheme, setSwitchTheme] = React.useState(false);

  const isHome = React.useMemo(
    () => getRouteTruthy(router.pathname, '/'),
    ['/']
  );

  const handleSetTheme = React.useCallback(
    (isChecked: boolean) => {
      setSwitchTheme(isChecked);
      if (!switchTheme) {
        return setTheme(dark);
      }
      return setTheme(light);
    },
    [setSwitchTheme, switchTheme]
  );

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: JssStyles | null =
      document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    setLocalStorage();
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
            {!isHome && <DisplayFooter />}
          </PlayerProvider>
        </OptionsProvider>
      </ThemeProvider>
    </>
  );
};

const myAppPropsHasChanged = (prevProps: AppProps, nextProps: AppProps) => {
  const Component = prevProps.Component === nextProps.Component;

  const pageProps = prevProps.pageProps === nextProps.pageProps;

  const router = prevProps.router === nextProps.router;

  return Component && pageProps && router;
};

export default React.memo(MyApp, myAppPropsHasChanged);
