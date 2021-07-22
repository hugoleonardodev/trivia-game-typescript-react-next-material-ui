import React, { ReactNode } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { useStyles } from '../../styles/library';
import { usePlayer } from '../../core/hooks/usePlayer';
import InputText from '../../components/InputText';
import DialogModal from '../DialogModal';

import { dialogs } from '../../common/constants';

interface PlayerProps {
  children?: ReactNode;
}

const Player: React.FC<PlayerProps> = () => {
  const styles = useStyles();

  const { handlePlayer, player, handleGitHubId, gitHubId } = usePlayer();

  return (
    <FormControl className={styles.formControl}>
      <InputText
        label="Player Name"
        handlePlayer={handlePlayer}
        player={player}
      />
      <InputText
        label="GitHub User Name"
        handlePlayer={handleGitHubId}
        player={gitHubId}
      />
      <DialogModal
        label={dialogs.home.label}
        title={dialogs.home.title}
        content={dialogs.home.content}
      />
    </FormControl>
  );
};

export default Player;
