import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from '../../styles/global';
import { MaterialIcons } from '../../styles/library';
import { useRouter } from 'next/dist/client/router';
import { getRouteTruthy } from '../../common/helpers';

const DisplayFooter: React.FC = () => {
  const styles = useStyles();

  const router = useRouter();

  const isInGame = React.useMemo(
    () => getRouteTruthy(router.pathname, '/ingame'),
    [router]
  );

  return (
    <AppBar
      position="static"
      component="footer"
      className={isInGame ? styles.displayFooterInGame : styles.displayFooter}
    >
      <Toolbar>
        <MaterialIcons>psychology</MaterialIcons>
        <Typography variant="h6">Trivia Game</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default DisplayFooter;
