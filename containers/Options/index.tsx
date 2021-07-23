import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../styles/library';
import { useOptions } from '../../core/hooks';
import Player from '../Player';
import SliderOptions from '../../components/SliderOptions';
import ButtonSwitch from '../../components/ButtonSwitch';

import { marks } from '../../common/constants';
import { MaterialIcons } from '../../styles/global';

function convertValueToText(value: number) {
  return `${value}°C`;
}

// const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Options: React.FC<Props> = (props) => {
  const {
    amountOfQuestions,
    difficultyLevel,
    handleSetTheme,
    handleAmount,
    handleDifficulty,
  } = useOptions();
  const { window } = props;

  const styles = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={styles.toolbar}></div>
      <Divider />
      <List>
        <ListItem button key="difficulty-level">
          <SliderOptions
            id="difficulty-level"
            title="Difficulty Level"
            step={33.34}
            stepMarks={marks.difficulty}
            valueText={convertValueToText}
            value={difficultyLevel}
            handleAmount={handleDifficulty}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="amount-of-questions">
          <SliderOptions
            id="amount-of-questions"
            title="Amount of Questions"
            step={33.34}
            stepMarks={marks.amount}
            valueText={convertValueToText}
            value={amountOfQuestions}
            handleAmount={handleAmount}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="switch-theme">
          <ButtonSwitch handleSetTheme={handleSetTheme} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={styles.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography className={styles.logo} variant="h6" noWrap>
            <MaterialIcons>psychology</MaterialIcons>
            Trivia Game
          </Typography>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: styles.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Player />
    </div>
  );
};

export default Options;
