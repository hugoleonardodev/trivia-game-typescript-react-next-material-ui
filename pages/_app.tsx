import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import NProgress from 'nprogress';
import { light, dark } from '../styles/themes/muiThemes';
import { JssStyles } from '../types/app';
import { OptionsProvider } from '../core/hooks/useOptions';
import { PlayerProvider } from '../core/hooks/usePlayer';
import { GlobalCss } from '../styles/library';
import DisplayFooter from '../components/DisplayFooter';
import { getRouteTruthy } from '../common/helpers';

import '../public/nprogress.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const Router = useRouter();

  const [theme, setTheme] = React.useState(light);

  const [switchTheme, setSwitchTheme] = React.useState(false);

  const isHome = React.useMemo(
    () => getRouteTruthy(Router.pathname, '/'),
    [Router]
  );

  React.useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleStop);
    Router.events.on('routeChangeError', handleStop);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleStop);
      Router.events.off('routeChangeError', handleStop);
    };
  }, [Router]);

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
