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

  const { player, handleAnswer, questionsCounter } = usePlayer();

  const { questions, handleGameStartOptions, isLoading } = useOptions();

  const router = useRouter();

  const isHome = router.pathname === '/';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAnswer = (event: any) => {
    handleAnswer(event);
    handleClose();
    // handleClickOpen();
  };

  React.useEffect(() => {
    !isHome && handleClickOpen();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      !isHome && handleClickOpen();
    }, 500);
  }, [handleClickAnswer, questionsCounter]);
  if (isLoading) {
    return <div>loading</div>;
  }
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
            {isHome
              ? content
              : markdownParser(questions[questionsCounter].question)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {isHome ? (
            <ButtonOutlined handleClick={handleClose}>Cancel</ButtonOutlined>
          ) : (
            <ButtonOutlined handleClick={handleClickAnswer}>
              {typeof questions[questionsCounter].correct_answer === 'string'
                ? markdownParser(questions[questionsCounter].correct_answer)
                : questions[questionsCounter].correct_answer}
            </ButtonOutlined>
          )}

          {isHome ? (
            <ButtonOutlined handleClick={handleGameStartOptions}>
              <Link href="/ingame">Start</Link>
            </ButtonOutlined>
          ) : (
            questions[questionsCounter].incorrect_answers.map(
              (answer, index) => (
                <React.Fragment key={`answer-${index}`}>
                  <ButtonOutlined handleClick={handleClickAnswer}>
                    {typeof answer === 'string'
                      ? markdownParser(answer)
                      : answer}
                  </ButtonOutlined>
                </React.Fragment>
              )
            )
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogModal;
