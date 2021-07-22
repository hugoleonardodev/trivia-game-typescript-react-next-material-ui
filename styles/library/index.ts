import { createStyles, makeStyles, Theme } from '@material-ui/core';

const drawerWidth = 400;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      // margin: theme.spacing(2),
      boxSizing: 'border-box',
      backgroundColor: theme.palette.info.main,
    },
    // margin: {
    //   margin: theme.spacing(2),
    // },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25px',
      color: theme.palette.primary.contrastText,
    },
    inputText: {
      margin: theme.spacing(2),
      color: theme.palette.primary.contrastText,
    },
    button: {
      minHeight: theme.spacing(8),
      height: '-webkit-fill-available',
      fontSize: theme.spacing(2),
      padding: theme.spacing(2),
      border: '2px solid rgba(0, 0, 0, 0.23)',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      width: '-webkit-fill-available',
      margin: theme.spacing(2),
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    formControl: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.info.light,
    },
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
