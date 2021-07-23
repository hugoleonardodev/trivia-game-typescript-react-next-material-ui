import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { useStyles } from '../../styles/library';
import { MaterialIcons } from '../../styles/global';
import { useOptions } from '../../core/hooks';
import { usePlayer } from '../../core/hooks/usePlayer';
import ImageAvatar from '../Avatar';

import { getOptionsStrings } from '../../common/helpers';

const Header: React.FC = () => {
  const styles = useStyles();

  const { amountOfQuestions, difficultyLevel } = useOptions();

  const { player, gitHubUserName, correctAnswers, wrongAnswers } = usePlayer();

  const options = getOptionsStrings(amountOfQuestions, difficultyLevel);

  return (
    <div className={styles.header}>
      <AppBar position="static">
        <Toolbar className={styles.headerToolbar}>
          <List className={styles.list}>
            <ListItem>
              <ImageAvatar gitHubUserName={gitHubUserName} />
            </ListItem>
            <ListItem>
              <Typography variant="h5" noWrap>
                {player}
              </Typography>
            </ListItem>
          </List>

          <Typography className={styles.headerTitle} variant="h5" noWrap>
            Trivia Game
          </Typography>

          <List>
            <ListItem>
              <Badge>
                <MaterialIcons>pin</MaterialIcons>
              </Badge>
              <Badge>
                <Typography>Total Questions</Typography>
              </Badge>
              <Avatar className={styles.avatarSmallOptions}>
                {options.amountString}
              </Avatar>
            </ListItem>
            <ListItem>
              <Badge>
                <MaterialIcons>assessment</MaterialIcons>
              </Badge>
              <Badge>
                <Typography>Difficulty Level</Typography>
              </Badge>
              <Chip
                label={options.difficultyString}
                className={styles.chipOptions}
              ></Chip>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Badge>
                <MaterialIcons>done_outline</MaterialIcons>
              </Badge>
              <Badge>
                <Typography>Correct Answers</Typography>
              </Badge>
              <Avatar className={styles.avatarSmallCorrect}>
                {correctAnswers}
              </Avatar>
            </ListItem>
            <ListItem>
              <Badge>
                <MaterialIcons>close</MaterialIcons>
              </Badge>
              <Badge>
                <Typography>Wrong Answers</Typography>
              </Badge>
              <Avatar className={styles.avatarSmallWrong}>
                {wrongAnswers}
              </Avatar>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
