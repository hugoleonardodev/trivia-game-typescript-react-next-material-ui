import React from 'react';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import Paper from '@material-ui/core/Paper';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {
  MaterialIcons,
  TimelineOppositeContentLeft,
  TimelineOppositeContentRight,
} from '../../styles/library';
import { useStyles } from '../../styles/global';
import { getLocalStorage, TriviaGameStorage } from '../../services';
import DisplayHeader from '../../components/DisplayHeader';
import MarkdownParser from '../../components/MarkdownParser';
import { muiThemeColors, triviaGameLocalStorage } from '../../common/constants';

const PlayerTimeLine: React.FC = () => {
  const styles = useStyles();

  const [gameStorage, setGameStorage] = React.useState<TriviaGameStorage>(
    triviaGameLocalStorage
  );

  React.useEffect(() => {
    const storage = getLocalStorage('triviaGame');
    setGameStorage(storage);
  }, []);

  return (
    <>
      <DisplayHeader />
      <Timeline align="alternate">
        {gameStorage.gameHistory.map((question, index) => (
          <TimelineItem key={`${index}-${question}`}>
            {index % 2 === 0 ? (
              <TimelineOppositeContentLeft>
                <Typography component="div" color="textSecondary">
                  {'Correct Answer:'}
                  <MarkdownParser
                    markdown={question.currentQuestion.correct_answer}
                  />
                </Typography>
              </TimelineOppositeContentLeft>
            ) : (
              <TimelineOppositeContentRight>
                <Typography component="div" color="textSecondary">
                  {'Correct Answer:'}
                  <MarkdownParser
                    markdown={question.currentQuestion.correct_answer}
                  />
                </Typography>
              </TimelineOppositeContentRight>
            )}

            <TimelineSeparator>
              <TimelineConnector
                style={{
                  backgroundColor: question.isCorrect
                    ? muiThemeColors.correct
                    : muiThemeColors.wrong,
                }}
              />
              <TimelineDot
                color="inherit"
                className={
                  question.isCorrect
                    ? styles.timeLineDotCorrect
                    : styles.timeLineDotWrong
                }
              >
                <MaterialIcons>
                  {question.isCorrect ? 'done_outline' : 'closed'}
                </MaterialIcons>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={styles.timeLinePaper}>
                <Typography component="div">
                  <MarkdownParser
                    markdown={question.currentQuestion.question}
                  />
                </Typography>
                <Typography component="div">
                  <MarkdownParser markdown={question.playerAnswer} />
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default PlayerTimeLine;
