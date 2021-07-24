import React, { ReactNode } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { useStyles } from '../../styles/global';
import { usePlayer } from '../../core/hooks/usePlayer';
import InputText from '../../components/InputText';
import DialogModal from '../DialogModal';

import { dialogs } from '../../common/constants';

interface PlayerProps {
  children?: ReactNode;
}

const HomePlayer: React.FC<PlayerProps> = () => {
  const styles = useStyles();

  const { handlePlayer, player, handleGitHubUserName, gitHubUserName } =
    usePlayer();

  return (
    <FormControl className={styles.formControl}>
      <InputText
        label="Player Name"
        handlePlayer={handlePlayer}
        player={player}
      />
      <InputText
        label="GitHub User Name"
        handlePlayer={handleGitHubUserName}
        player={gitHubUserName}
      />
      <DialogModal
        label={dialogs.home.label}
        title={dialogs.home.title}
        content={dialogs.home.content}
      />
    </FormControl>
  );
};

export default HomePlayer;
