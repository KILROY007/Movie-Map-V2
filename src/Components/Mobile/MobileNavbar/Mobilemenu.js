import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {TiThMenuOutline} from 'react-icons/ti'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    menuButton:{
        color: '#cf2f27',
        fontSize:'2rem',
    }
})

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}>
        <TiThMenuOutline/>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={()=>window.location.pathname='/trending'}>Trending</MenuItem>
        <MenuItem onClick={()=>window.location.pathname='/movies'}>Movies</MenuItem>
        <MenuItem onClick={()=>window.location.pathname='/series'}>Series</MenuItem>
      </Menu>
    </div>  
  );
}