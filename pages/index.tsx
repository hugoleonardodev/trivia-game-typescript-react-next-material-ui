import React from 'react';
// import { useOptions } from '../core/hooks';
// import Player from '../containers/Player';
// import { InputText, ButtonOulined } from '../components';
import ResponsiveDrawer from '../containers/Options';

const Home: React.FC = (): JSX.Element => {
  // const { handleQuestions } = useOptions();

  // useEffect(() => {
  //   handleQuestions(10, 9, 'easy', '');
  // }, []);

  return (
    <>
      {/* <Player>
        <InputText />
        <InputText />
        <ButtonOulined>Start</ButtonOulined>
      </Player> */}
      <ResponsiveDrawer />
    </>
  );
};

export default Home;
