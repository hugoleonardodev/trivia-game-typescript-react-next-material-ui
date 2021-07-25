import React from 'react';
import HomeOptionsWithHomePlayer from '../containers/HomeOptions';
import { setLocalStorage } from '../services';

const Home: React.FC = (): JSX.Element => {
  React.useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <>
      <HomeOptionsWithHomePlayer />
    </>
  );
};

export default Home;
