import React from 'react';
import DialogModal from '../../containers/DialogModal';
import DisplayHeader from '../../components/DisplayHeader';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inGameCircularProgress: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    inGameLoading: {
      display: 'flex',
      justifyContent: 'center',
      alignIitems: 'center',
      transform: 'translateY(25vh)',
    },
  })
);

import { dialogs } from '../../common/constants';

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
