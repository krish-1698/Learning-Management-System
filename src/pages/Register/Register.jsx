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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Register() {

  let navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: null,
    email: null,
    password: null,
    role: null,
    state: "ACTIVE"
  })


  const handleOnChangeName = (event) => {
    setUserInfo({
      ...userInfo,
      name: event.target.value,
    })
  }

  const handleOnChangeEmail = (event) => {
    setUserInfo({
      ...userInfo,
      email: event.target.value,
    })
  }

  const handleOnChangePassword = (event) => {

    setUserInfo({
      ...userInfo,
      password: event.target.value,
    })
  }
  const handleOnChangeRole = (event) => {
    setUserInfo({
      ...userInfo,
      role: event.target.value,
    })
  }

  const saveUser = () => {
    axios
      .post("http://localhost:8080/api/v1/user/saveUser", {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        role: userInfo.role,
        state: userInfo.state
      })
      .then((res) => {
        // setCourses(res.data);
        // setName(res.data);
        console.log(res.data);
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // select
  // const [Role, setAge] = React.useState("");
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // const handleOnChangeEmail = (event) => {
  //   setUserInfo({
  //     ...userInfo,
  //     email: event.target.value,
  //   });
  // };

  // const handleOnChangePassword = (event) => {
  //   setUserInfo({
  //     ...userInfo,
  //     password: event.target.value,
  //   });
  // };

  // const handleOnChangeRole = (event) => {
  //   setUserInfo({
  //     ...userInfo,
  //     role: event.target.value,
  //   });
  // };

  // const saveUser = () => {
  //   axios.post('http://localhost:8080/api/v1/user/saveUser', {
  //     name: userInfo.name,
  //     email: userInfo.email,
  //     password: userInfo.password,
  //     role: userInfo.role,
  //     state: userInfo.state
  //   })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  //return
  return (
    <div align="center">
      <Paper >
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

                {/* <TextField id="userId" label="User Id" variant="outlined" /> */}
                <TextField id="name" onChange={handleOnChangeName} value={userInfo.name} label="Name" variant="outlined" />
                <TextField id="email" onChange={handleOnChangeEmail} value={userInfo.email} label="Email" variant="outlined" />

                {/* Password */}
                <TextField
                  onChange={handleOnChangePassword} value={userInfo.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />

                {/* <TextField
                required
                fullWidth
                name="cPassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="new-password"
              /> */}

                <FormControl fullWidth>
                  <InputLabel id="role">Role</InputLabel>
                  <Select
                    onChange={handleOnChangeRole} value={userInfo.role}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={Role}
                    label="Role"
                  // onChange={handleChange}
                  >
                    <MenuItem value={"Student"}>Student</MenuItem>
                    <MenuItem value={"Lecturer"}>Lecturer</MenuItem>
                  </Select>
                </FormControl>

                <Button variant="contained" onClick={saveUser}>Register</Button>
              </Box>

              <Box m={4}>
                <Typography align="center">
                  Already Registered?<Link to={"/login"}>Sign In</Link>
                </Typography>
              </Box>
          </Grid>
        </Grid>

        <footer><AppBar position="sticky" color="primary" >
          <Toolbar>
            <Typography color="inherit" component="div">
              Copyright © 2022. All rights reserved.
            </Typography>
          </Toolbar>
        </AppBar></footer>
      </Paper>

    </div>
  );
}

export default Register;
