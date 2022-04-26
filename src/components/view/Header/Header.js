import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/JioLogo.svg';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: '#214796' }}>
        <Toolbar>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Stack spacing={1} direction="row">
            <Link to="/register">
              <Button variant="contained" style={{textTransform: 'none', background: '#00B4A3'}}>Sign up</Button>
            </Link>
            <Link to="/login">
              <Button variant="contained" style={{textTransform: 'none'}}>Sign in</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header