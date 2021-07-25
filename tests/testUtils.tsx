import '@testing-library/jest-dom';
import { ReactElement, JSXElementConstructor } from 'react';
import { render, RenderResult } from '@testing-library/react';
// import { CssBaseline, ThemeProvider } from '@material-ui/core';
// import { OptionsProvider } from '../core/hooks/useOptions';
// import { dark } from '../styles/themes/muiThemes';

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

const Providers: React.FC<AppProps> = ({ Component, pageProps, router }) => {
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

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

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

// const Providers = ({ children }: Element) => {
//   return (
//     <>
//       <CssBaseline />
//       <ThemeProvider theme={theme}>
//         <GlobalCss />
//         <OptionsProvider
//           handleSetTheme={handleSetTheme}
//           switchTheme={switchTheme}
//         >
//           <PlayerProvider>
//             <Component {...pageProps} router={router} />
//             {!isHome && <DisplayFooter />}
//           </PlayerProvider>
//         </OptionsProvider>
//       </ThemeProvider>
//     </>
//   );
// };

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options = {}
): RenderResult => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
