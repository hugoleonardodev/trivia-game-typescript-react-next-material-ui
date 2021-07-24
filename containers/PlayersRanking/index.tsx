import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
// import Timeline from '@material-ui/lab/Timeline';
// import Paper from '@material-ui/core/Paper';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
import { MaterialIcons } from '../../styles/library';
import { useStyles } from '../../styles/global';
import { getLocalStorage } from '../../services';
import DisplayHeader from '../../components/DisplayHeader';
// import MarkdownParser from '../../components/MarkdownParser';

// const correct = '#8bc34a';
// const wrong = '#f44336';

const PlayersRanking: React.FC = () => {
  const styles = useStyles();

  const storage = getLocalStorage('triviaGame');

  return (
    <>
      <DisplayHeader />

      <div className={styles.accordion}>
        {storage.gameHistory.map((question, index) => (
          <Accordion
            key={question.currentQuestion.question}
            className={
              question.isCorrect
                ? styles.accordionCorrect
                : styles.accordionWrong
            }
          >
            <AccordionSummary
              expandIcon={<MaterialIcons>expand_more</MaterialIcons>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.accordionHeading}>
                {`Player - ${index + 1}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.currentQuestion.question}</Typography>
              <div className={styles.chipsDashboard}>
                <Chip
                  icon={<MaterialIcons>done_outline</MaterialIcons>}
                  label={`${question.currentQuestion.correct_answer}`}
                  color="secondary"
                />
                <Chip
                  icon={<MaterialIcons>done_outline</MaterialIcons>}
                  label={`${question.currentQuestion.correct_answer}`}
                  color="primary"
                />
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default PlayersRanking;
