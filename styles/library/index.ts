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
      boxSizing: 'border-box',
      backgroundColor: theme.palette.info.main,
    },
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
    header: {
      flexGrow: 1,
    },
    headerMenuButton: {
      marginRight: theme.spacing(2),
    },
    headerToolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    headerTitle: {
      flexGrow: 1,
      alignSelf: 'flex-end',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    imageAvatar: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      // [theme.breakpoints.down('sm')]: {
      //   display: 'none',
      // },
    },
    list: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    imageAvatarLarge: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    avatarSmallOptions: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      fontSize: theme.spacing(2),
    },
    chipOptions: {
      display: 'flex',
      justifyContent: 'center',
      height: '20px',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      // flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    avatarSmallCorrect: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
      backgroundColor: theme.palette.success.main,
      color: theme.palette.secondary.contrastText,
      fontSize: theme.spacing(2),
    },
    avatarSmallWrong: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
      backgroundColor: theme.palette.error.main,
      color: theme.palette.secondary.contrastText,
      fontSize: theme.spacing(2),
    },
  })
);
