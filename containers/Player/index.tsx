import React, { ReactNode } from 'react';

import { FormControl } from '@material-ui/core';
import { useStyles } from '../../styles/library';

interface PlayerProps {
  children?: ReactNode;
}

const Player: React.FC<PlayerProps> = ({ children }) => {
  const styles = useStyles();

  return <FormControl className={styles.formControl}>{children}</FormControl>;
};

export default Player;
