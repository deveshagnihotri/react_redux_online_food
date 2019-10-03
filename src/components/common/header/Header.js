import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black',
    backgroundColor: 'yellow'
  },
  title: {
    flexGrow: 1,
    color: 'grey'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SKADOOSHH
          </Typography>
          <Avatar
            src="https://info.phishlabs.com/hubfs/Headshots/1-Crane_1.jpg"
            width="15"
            height="15"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
