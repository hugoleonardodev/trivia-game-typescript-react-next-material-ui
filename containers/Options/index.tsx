import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../styles/library';
import Player from '../Player';
import { ButtonOutlined, InputText } from '../../components';
import SliderOptions from '../../components/SliderOptions';
import ButtonSwitch from '../../components/ButtonSwitch';

import { marks } from '../../common/constants';
import { useOptions } from '../../core/hooks';

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

export default function ResponsiveDrawer(props: Props) {
  const { amountOfQuestions, difficultyLevel } = useOptions();
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
            stepMarks={marks}
            valueText={convertValueToText}
            value={difficultyLevel}
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
            stepMarks={marks}
            valueText={convertValueToText}
            value={amountOfQuestions}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="switch-theme">
          <ButtonSwitch />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={styles.appBar}>
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
            Trivia Game
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={styles.drawer} aria-label="mailbox folders">
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
      <Player>
        <InputText label="Player Name" />
        <InputText label="GitHub User Name" />
        <ButtonOutlined>PLAY</ButtonOutlined>
      </Player>
    </div>
  );
}
