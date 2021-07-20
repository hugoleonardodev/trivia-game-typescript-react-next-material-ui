// import { Theme } from '@material-ui/core/styles/createTheme';
import { dark, light } from './muiThemes';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export type Dark = typeof dark;

export type Light = typeof light;
declare module '@material-ui/core/styles/createTheme' {
  export interface DarkTheme extends Dark {
    appDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: Breakpoint;
    };
  }
  // allow configuration using `createTheme`
  export interface LightTheme extends Light {
    appDrawer?: {
      width?: React.CSSProperties['width'];
      breakpoint?: Breakpoint;
    };
  }
}
