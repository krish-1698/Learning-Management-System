import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Login } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [userInfo, setUserInfo] = React.useState({
    name: null,
    email: null,
    password: null,
    role: null,
    state: "ACTIVE"
  });

  const handleOnChangeName = (event) => {
    setUserInfo({
      ...userInfo,
      name: event.target.value,
    });
  };

  const handleOnChangeEmail = (event) => {
    setUserInfo({
      ...userInfo,
      email: event.target.value,
    });
  };

  const handleOnChangePassword = (event) => {
    setUserInfo({
      ...userInfo,
      password: event.target.value,
    });
  };

  const handleOnChangeRole = (event) => {
    setUserInfo({
      ...userInfo,
      role: event.target.value,
    });
  };

  const saveUser = () => {
    axios.post('http://localhost:8080/api/v1/user/saveUser', {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      role: userInfo.role,
      state: userInfo.state
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  //return
  return (
    <div align="center">
      <Paper>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" component="div">
              <h2>University Learning Management System</h2>
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              alignItems="center"
              alt="HomePage"
              width="100%"
              height="90%"
              sx={{ mt: "2vw" }}
              src={
                "https://www.paatham.in/assets/images/website-image/E%20Learning.webp"
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "30vw" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                onChange={handleOnChangeName}
                value={userInfo.name}
              />

              <TextField
                id="email"
                label="Email"
                variant="outlined"
                onChange={handleOnChangeEmail}
                value={userInfo.email}
              />

              {/* Password */}
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleOnChangePassword}
                value={userInfo.password}
              />

              <FormControl fullWidth>
                <InputLabel id="role">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleOnChangeRole}
                  value={userInfo.role}
                  label="Role"
                >
                  <MenuItem value={"Student"}>Student</MenuItem>
                  <MenuItem value={"Lecture"}>Lecture</MenuItem>
                </Select>
              </FormControl>

              <Button onClick={saveUser} variant="contained">Register</Button>
            </Box>

            <Box m={4}>
              <Typography align="center">
                Already Registered?<Link to={"/login"}>Sign In</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <footer>
          <AppBar position="sticky" color="primary">
            <Toolbar>
              
            </Toolbar>
          </AppBar>
        </footer>
      </Paper>
    </div>
  );
}

export default Register;
