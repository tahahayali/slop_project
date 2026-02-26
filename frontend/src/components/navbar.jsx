// Taken from https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const loggedOutPages = ['Login', 'Signup', 'Home'];
const loggedInPages = ['Account', 'Home', 'Logout'];

function Navbar({user, onLogout}) {

const handleLogout = (page) => {
  if (page === 'Logout') {
    console.log("User: " + user + "is logging out");
    onLogout();
    console.log("User logged out, confirming user is null: " + user);
  }
}

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
            {user ? 

              loggedInPages.map((page) => (
                <Button
                  component= {Link}
                  to={'/' + page.toLowerCase()}
                  variant='outlined'
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={handleLogout(page)}
                  >
                  {page}
                  </Button>
              )) : 
              loggedOutPages.map((page) => (
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