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
import { getLocalStorage } from '../../services';

const PlayersRanking: React.FC = () => {
  const styles = useStyles();

  const storage = getLocalStorage('triviaGame');

  return (
    <>
      <AppBar position="static" className={styles.displayHeader}>
        <Toolbar>
          <MaterialIcons>emoji_events</MaterialIcons>
          <Typography variant="h6">Rankings</Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.accordion}>
        {storage.ranking.map((player, index) => (
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
