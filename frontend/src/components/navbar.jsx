// Taken from https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";

const pages = ['Login', 'Signup', 'Home'];

function Navbar() {

  return (
    <AppBar position="absolute">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          {/* We want our logo here */}
          <Typography
            component={Link}
            to="/home"
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              flexGrow: 1, // Pushes this item to the left
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Gill Sans',
              fontWeight: 200,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* This is the logo text */}
            SLOP
          </Typography>

          {/* This is for each page*/}
          <Box sx={{display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', ml:2}}>
            {pages.map((page) => (
              <Button
                component= {Link}
                to={'/' + page.toLowerCase()}
                variant='outlined'
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;