import React, { useEffect } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { useOptions } from '../core/hooks';

const Home: React.FC = (): JSX.Element => {
  const { handleQuestions } = useOptions();

  useEffect(() => {
    handleQuestions(10, 9, 'easy', 'boolean');
  }, []);

  return (
    <div>
      <AppBar>
        <Toolbar>Hello World</Toolbar>
      </AppBar>
    </div>
  );
};

export default Home;
