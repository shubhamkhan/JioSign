import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import LoginBann from '../../images/loginBann.svg';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const Register = () => {

  const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        country: "",
        pincode: "",
        address: ""
    });

    let key, value;

    const handleInputs = (e) => {
        key = e.target.name;
        value = e.target.value;
        console.log(key,value);

        setUser({...user, [key]:value});
    }

    const sendData = async (e) => {
        e.preventDefault();

        const { name, email, password, password2, country, pincode, address } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password, password2, country, pincode, address})
        });

        const data = await res.json();
        if(data && res.status === 201) {
            console.log("Successfull Registration" + res.status);
            console.log(data);
            navigate("/login");
        } else {
            console.log("Invalid Registration"); 
        }
    }

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
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
      <Grid item xs={5.5}>
        <Typography variant="h5" gutterBottom component="div" style={{fontWeight: '600'}}>
          Create an Account
        </Typography>
        {/* <form method='POST'> */}
          <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate  autoComplete="off">
            <div align='left'>
              <TextField
                required
                id="name"
                label="Name"
                placeholder='Name'
                value={user.name}
                onChange={handleInputs}
              />
              <TextField
                required
                id="email"
                label="Contact Email ID / Mobile Number"
                placeholder='Email ID / Mobile'
                value={user.email}
                onChange={handleInputs}
              />
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={user.password}
                onChange={handleInputs}
              />
              <TextField
                required
                id="password2"
                label="Confrom Password"
                type="password"
                autoComplete="current-password"
                value={user.password2}
                onChange={handleInputs}
              />
              <TextField
                required
                id="country"
                label="Country"
                placeholder='Country'
                value={user.country}
                onChange={handleInputs}
              />
              <TextField
                required
                id="pincode"
                label="Pincode"
                placeholder='Pincode'
                value={user.pincode}
                onChange={handleInputs}
              />
              <TextField
                required
                id="address"
                label="Address"
                placeholder="Address"
                multiline
                rows={2}
                value={user.address}
                onChange={handleInputs}
              />
            </div>
            
            <Typography variant="subtitle2" gutterBottom component="div" style={{fontWeight: '600'}}>
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
              I agree to <Link to='/terms'><u>Terms and Conditions</u></Link> and <Link to='/privacy'><u>Privacy Policy</u></Link> of JioSign.
            </Typography>

            <Button 
              variant="contained"
              style={{
                minWidth: "70%",
                background: '#214796',
                textTransform: 'none'
              }}
              onClick={sendData}
            >
              Proceed
            </Button>
          </Box>
        {/* </form> */}
      </Grid>
    </Grid>
      
    </Container>
    </React.Fragment>
  )
}

export default Register