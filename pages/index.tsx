import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export default function Home(): JSX.Element {
  return (
    <div>
      <AppBar>
        <Toolbar>Hello World</Toolbar>
      </AppBar>
    </div>
  );
}
