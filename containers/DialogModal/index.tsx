import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import ButtonOutlined from '../../components/ButtonOutlined';
import { usePlayer } from '../../core/hooks/usePlayer';
import { useOptions } from '../../core/hooks';
import { markdownParser, randomDirections } from '../../common/helpers';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction={randomDirections()} ref={ref} {...props} />;
});

interface DialogModalProps {
  label: string;
  title: string;
  content: string;
}

const DialogModal: React.FC<DialogModalProps> = ({ label, title, content }) => {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const isHome = router.pathname === '/';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { player } = usePlayer();
  const { questions, handleGameStartOptions } = useOptions();

  React.useEffect(() => {
    !isHome && handleClickOpen();
  }, []);

  return (
    <div>
      {isHome && (
        <ButtonOutlined handleClick={handleClickOpen}>PLAY</ButtonOutlined>
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby={`${label}-title`}
        aria-describedby={`${label}-description`}
      >
        {isHome && <DialogTitle id={`${label}-title`}>{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText id={`${label}-description`}>
            {isHome && `Hello ${player}!! `}
            {isHome ? content : markdownParser(questions[0].question)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {isHome ? (
            <ButtonOutlined handleClick={handleClose}>Cancel</ButtonOutlined>
          ) : (
            <ButtonOutlined handleClick={handleClose}>
              {typeof questions[0].correct_answer === 'string'
                ? markdownParser(questions[0].correct_answer)
                : questions[0].correct_answer}
            </ButtonOutlined>
          )}

          {isHome ? (
            <ButtonOutlined handleClick={handleGameStartOptions}>
              <Link href="/ingame">Start</Link>
            </ButtonOutlined>
          ) : (
            questions[0].incorrect_answers.map((answer, index) => (
              <React.Fragment key={`answer-${index}`}>
                <ButtonOutlined>
                  {typeof answer === 'string' ? markdownParser(answer) : answer}
                </ButtonOutlined>
              </React.Fragment>
            ))
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogModal;
