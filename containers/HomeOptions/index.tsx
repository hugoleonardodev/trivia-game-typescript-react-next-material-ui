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
import { useStyles } from '../../styles/global';
import { useOptions } from '../../core/hooks';
import Player from '../HomePlayer';
import SliderOptions from '../../components/SliderOptions';
import ButtonSwitch from '../../components/ButtonSwitch';
import { MaterialIcons } from '../../styles/library';

import { marks } from '../../common/constants';

function convertValueToText(value: number) {
  return `${value}°C`;
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const HomeOptions: React.FC<Props> = (props) => {
  const { window } = props;

  const {
    amountOfQuestions,
    difficultyLevel,
    handleSetTheme,
    handleAmount,
    handleDifficulty,
  } = useOptions();

  const styles = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [setMobileOpen, mobileOpen]);

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
        <Toolbar className={styles.homeAppBarToolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <MaterialIcons>menu</MaterialIcons>
          </IconButton>
          <Typography variant="h6">Trivia Game</Typography>
          <Typography className={styles.logo} component="div" noWrap>
            <MaterialIcons>psychology</MaterialIcons>
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

export default HomeOptions;
