import React from 'react';
import Link from 'next/link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { usePlayer } from '../../core/hooks/usePlayer';
import ButtonOutlined from '../../components/ButtonOutlined';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { player } = usePlayer();

  return (
    <div>
      <ButtonOutlined handleClick={handleClickOpen}>PLAY</ButtonOutlined>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Are you sure to start this nigthmare?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`
              Hello ${player} !! Your avatar will only be shown if you have a GitHub valid username.

              You will only have 30 seconds to answer each question. So do not try to Google it.
              You will have no time.

              Good Luck! And Have Fun! :D
            `}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonOutlined handleClick={handleClose}>Cancel</ButtonOutlined>
          <Link href="/ingame">
            <ButtonOutlined>Start</ButtonOutlined>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogModal;
