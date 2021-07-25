import React from 'react';
import DialogModal from '../../containers/DialogModal';
import DisplayHeader from '../../components/DisplayHeader';
import CircularProgress from '@material-ui/core/CircularProgress';

import { dialogs } from '../../common/constants';
import { useStyles } from '../../styles/global';

const InGame: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <DisplayHeader />
      <div className={styles.inGameLoading}>
        <CircularProgress
          className={styles.inGameCircularProgress}
          size={80}
          color="secondary"
        />
      </div>
      <DialogModal
        label={dialogs.home.label}
        title={dialogs.home.title}
        content={dialogs.home.content}
      />
    </>
  );
};

export default InGame;
