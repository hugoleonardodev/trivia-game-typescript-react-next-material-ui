import { createStyles, makeStyles, Theme } from '@material-ui/core';

const drawerWidth = 400;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing(2),
      boxSizing: 'border-box',
      backgroundColor: theme.palette.grey[400],
    },
    margin: {
      margin: theme.spacing(2),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25px',
    },
    inputText: {
      margin: theme.spacing(2),
    },
    button: {
      height: theme.spacing(6),
      fontSize: theme.spacing(4),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
      margin: theme.spacing(2),
    },
    formControl: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.info.light,
    },
    drawer: {
      // marginLeft: drawerWidth,
      // [theme.breakpoints.down('sm')]: {
      //   marginLeft: drawerWidth,
      //   flexShrink: 0,
      // },
    },
    appBar: {},
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.down('md')]: {
        width: 300,
        flexShrink: 0,
      },
      [theme.breakpoints.down('sm')]: {
        width: 250,
        flexShrink: 0,
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    logo: {
      marginLeft: 350,
      [theme.breakpoints.down('md')]: {
        marginLeft: 300,
        flexShrink: 0,
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 250,
        flexShrink: 0,
      },
      [theme.breakpoints.down(600)]: {
        marginLeft: 0,
        flexShrink: 0,
      },
    },
    slider: {
      width: 200,
      marginLeft: 16,
    },
  })
);
