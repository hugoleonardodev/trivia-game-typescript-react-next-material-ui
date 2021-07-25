import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MaterialIcons } from '../../styles/library';
import { useStyles } from '../../styles/global';
import { getLocalStorage, TriviaGameStorage } from '../../services';
import { triviaGameLocalStorage } from '../../common/constants';

const PlayersRanking: React.FC = () => {
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
      <AppBar position="static" className={styles.displayHeader}>
        <Toolbar>
          <MaterialIcons>emoji_events</MaterialIcons>
          <Typography variant="h6">Rankings</Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.accordion}>
        {gameStorage.ranking
          .sort((a, b) => b.playerRating - a.playerRating)
          .map((player, index) => (
            <Accordion key={player.playerName}>
              <AccordionSummary
                expandIcon={<MaterialIcons>expand_more</MaterialIcons>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordionHeading}>
                  {`${index + 1} - ${player.playerName}`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Avatar src={player.playerAvatar} />
                <div className={styles.chipsDashboard}>
                  <Chip
                    icon={<MaterialIcons>done_outline</MaterialIcons>}
                    label={`${player.playerRating}`}
                    color="primary"
                  />
                  <Chip
                    icon={<MaterialIcons>done_outline</MaterialIcons>}
                    label={`Difficulty = Hard`}
                    color="secondary"
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
