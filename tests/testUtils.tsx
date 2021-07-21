import '@testing-library/jest-dom';
import { ReactElement, JSXElementConstructor } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { OptionsProvider } from '../core/hooks/useOptions';
import { dark } from '../styles/themes/muiThemes';

const Providers = ({ children }: Element) => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <OptionsProvider>
          <CssBaseline />
          {children}
        </OptionsProvider>
      </ThemeProvider>
    </>
  );
};

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options = {}
): RenderResult => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
