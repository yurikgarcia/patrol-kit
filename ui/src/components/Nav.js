import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LocalPoliceIcon />
            
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Patrol Kit
            </Typography>
        
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="inherit">
                Units
            </Button>

            <AccountCircleIcon />
        
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem component={Link} to="/units" onClick={handleClose}>
            45 SFS Patrick
          </MenuItem>
          <MenuItem component={Link} to="/units" onClick={handleClose}>
            45 SFS Cape
          </MenuItem>
        </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}