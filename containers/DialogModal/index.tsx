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
import { getRouteTruthy, randomDirections } from '../../common/helpers';
import MarkdownParser from '../../components/MarkdownParser';
import { useStyles } from '../../styles/global';
import { useMemo } from 'react';
import { useState } from 'react';
import { useWindowSize } from '../../core/hooks/useWindowSize';
import { List, ListItem } from '@material-ui/core';

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

  const { player, handleAnswer, questionsCounter, hasNext } = usePlayer();

  const { questions, handleGameStartOptions, isLoading } = useOptions();

  const [currentAnswers, setCurrentAnswers] = useState<(string | boolean)[]>(
    []
  );

  const [width] = useWindowSize();

  const styles = useStyles();

  const router = useRouter();

  const isHome = useMemo(() => getRouteTruthy(router.pathname, '/'), [router]);

  const isInGame = useMemo(
    () => getRouteTruthy(router.pathname, '/ingame'),
    [router]
  );

  const isMobile = width < 768;

  const question = questions[questionsCounter];

  const getAllQuestionsAnswers = (
    correctAnswer: string,
    wrongAnswers: string[] | boolean[]
  ) => {
    const newArrayFromQuestions = [...wrongAnswers, correctAnswer];

    const sortedAnswersArray = newArrayFromQuestions.sort();

    return sortedAnswersArray;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAnswer = (event: any) => {
    handleAnswer(event);
    handleClose();
  };

  React.useEffect(() => {
    !isHome && handleClickOpen();
  }, []);

  let timer: any;
  React.useEffect(() => {
    if (questionsCounter < questions.length) {
      timer = setTimeout(() => {
        !isHome && handleClickOpen();
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [handleClickAnswer, questionsCounter]);

  React.useEffect(() => {
    if (!isHome && questions.length > 0) {
      const correctAnswer = question.correct_answer.toString();
      const wrongAnswers = question.incorrect_answers;
      const newArrayOfAnswers = getAllQuestionsAnswers(
        correctAnswer,
        wrongAnswers
      );
      setCurrentAnswers(newArrayOfAnswers);
    }
  }, [questions, handleAnswer]);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!hasNext) {
    return (
      <Dialog open={!hasNext}>
        <DialogContent>
          <DialogContentText>Game Over</DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonOutlined handleClick={(e) => e.preventDefault()}>
            Go to Dashboard
            <Link href="/dashboard">Go to Dashboard</Link>
          </ButtonOutlined>
        </DialogActions>
      </Dialog>
    );
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
        className={isInGame ? styles.dialogInGame : ''}
      >
        {isHome && <DialogTitle id={`${label}-title`}>{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText component="div" id={`${label}-description`}>
            {isHome && `Hello ${player}!! `}
            {isHome ? content : <MarkdownParser markdown={question.question} />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {isHome && (
            <ButtonOutlined handleClick={handleClose}>Cancel</ButtonOutlined>
          )}

          {isHome ? (
            <ButtonOutlined handleClick={handleGameStartOptions}>
              Start
              <Link href="/ingame">Start</Link>
            </ButtonOutlined>
          ) : isMobile ? (
            <List
              style={{
                justifyContent: 'center',
                width: '-webkit-fill-available',
              }}
            >
              {currentAnswers.map((answer, index) => (
                <ListItem
                  key={`answer-${index}`}
                  style={{ width: '-webkit-fill-available' }}
                >
                  <ButtonOutlined
                    handleClick={handleClickAnswer}
                    hasValue={answer.toString()}
                    isList
                  >
                    {typeof answer === 'string' ? (
                      <MarkdownParser markdown={answer} />
                    ) : (
                      answer
                    )}
                  </ButtonOutlined>
                </ListItem>
              ))}
            </List>
          ) : (
            currentAnswers.map((answer, index) => (
              <ButtonOutlined
                handleClick={handleClickAnswer}
                hasValue={answer.toString()}
                key={`answer-${index}`}
              >
                {typeof answer === 'string' ? (
                  <MarkdownParser markdown={answer} />
                ) : (
                  answer
                )}
              </ButtonOutlined>
            ))
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogModal;
