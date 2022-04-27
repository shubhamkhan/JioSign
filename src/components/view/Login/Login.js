import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginBann from '../../images/loginBann.svg';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const Login = () => {
  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate("/dashboard");

    // const res = await fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({email, password})
    // });

    // const data = res.json();

    // if(res.status === 200 && data) {
    //   dispatch({type: 'USER', payload: true})
    //   console.log("Login Sucessful");
    //   navigate("/");
    // } else {
    //   console.log("Invalid Credentials");
    // }

  }
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg" style={{marginTop: '7%'}}>
    <Grid container spacing={2}>
      <Grid item xs={6.5}>
        <Box>
          <Grid
            container
            spacing={1}
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              marginBottom: 4,
            }}
          >
            <Grid item xs={4} style={{marginTop: '12%', textAlign: 'left', paddingLeft: '4%'}}>
              <Typography variant="h5" gutterBottom component="div" style={{color: '#214796'}}>
                Accelerate your Business with JioSign
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div" style={{ fontSize: '12px', color: '#709D9F' }}>
                Most Convenient, Fastest and Secure Digital Signing Solution
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <img src={LoginBann} alt="LoginBanner" style={{width: '100%', padding: '15px'}} />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item 
              xs={3.5}
              style={{ background: '#CFFCF9', paddingTop: '18px', paddingBottom: '18px' }}
              sx={{
              boxShadow: 2,
              borderRadius: 2,
              marginRight: 5,
            }}>
              <BorderColorOutlinedIcon style={{ fontSize: 40, color: '#214796' }} />
              <Typography variant="subtitle2" gutterBottom component="div" style={{ fontSize: '12px', color: '#214796' }}>
                Bulk Signing options
              </Typography>
            </Grid>
            <Grid
              item 
              xs={3.5}
              style={{ background: '#CFFCF9', paddingTop: '18px', paddingBottom: '18px' }}
              sx={{
              boxShadow: 2,
              borderRadius: 2,
              marginRight: 4,
            }}>
              <GroupAddOutlinedIcon style={{ fontSize: 40, color: '#214796' }} />
              <Typography variant="subtitle2" gutterBottom component="div" style={{ fontSize: '12px', color: '#214796' }}>
                Add multiple participants
              </Typography>
            </Grid>
            <Grid
              item 
              xs={3.5}
              style={{ background: '#CFFCF9', paddingTop: '18px', paddingBottom: '18px' }}
              sx={{
              boxShadow: 2,
              borderRadius: 2,
            }}>
              <GppGoodOutlinedIcon style={{ fontSize: 40, color: '#214796' }} />
              <Typography variant="subtitle2" gutterBottom component="div" style={{ fontSize: '12px', color: '#214796' }}>
                Secure
              </Typography>
            </Grid>            
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={5.5} marginTop="10%">
        <Typography variant="h5" gutterBottom component="div" style={{fontWeight: '600'}}>
          Sign in to JioSign
        </Typography>
        <form method='POST'>
          <Box sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate  autoComplete="off">
            <div>
              <TextField
                required
                id="email"
                label="Contact Email ID / Mobile Number"
                placeholder='Email ID / Mobile'
                style={{
                  minWidth: "70%",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                style={{
                  minWidth: "70%",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />          
            </div>

            <Button 
              variant="contained"
              style={{
                minWidth: "70%",
                background: '#214796',
                textTransform: 'none'
              }}
              onClick={loginUser}
            >
              Login
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
      
    </Container>
    </React.Fragment>
  )
}

export default Login