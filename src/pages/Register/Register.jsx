import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Register() {
  

  //select
  const [Role, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
              sx={{mt:"2vw"}}
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

              <TextField id="userId" label="User Id" variant="outlined" />
              <TextField id="name" label="Name" variant="outlined" />
              <TextField id="email" label="Email" variant="outlined" />

              {/* Password */}
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />

              <TextField
                required
                fullWidth
                name="cPassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="new-password"
              />

              <FormControl fullWidth>
                <InputLabel id="role">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Role}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value={"Student"}>Student</MenuItem>
                  <MenuItem value={"Lecture"}>Lecture</MenuItem>
                </Select>
              </FormControl>

              <Button variant="contained">Register</Button>
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
            <Typography  color="inherit" component="div">
            Copyright © 2022. All rights reserved.
            </Typography>
          </Toolbar>
        </AppBar></footer>
        </Paper>
        
    </div>
  );
}

export default Register;
