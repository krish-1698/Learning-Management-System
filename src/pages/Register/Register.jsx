import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

function Register() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    direction: "row",
  });

//password
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //select
  const [age, setAge] = React.useState('');



  //return
  return (
    <div align="center">
      <Paper elevatio={20}  sx={{  width: '75%', overflow: 'hidden' }}>
      <Box component="form"  sx={{"& > :not(style)": { m: 1, width: "50vw"} }} noValidate autoComplete="off">
        <Box p={2}><h1>Register</h1></Box>
        

        <TextField id="studentId" label="Student Id" variant="outlined" />
        <TextField id="name" label="Name" variant="outlined" />
        <TextField id="email" label="Email" variant="outlined" />

        {/* Password */}
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="password"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="confirmPassorwd">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="confirmPassowrd"
            type={values.showPassword ? "text" : "password"}
           /*  value={values.password}
            onChange={handleChange("password")} */
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="confirmPassword"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label=" Password"
          />
        </FormControl>

        <FormControl fullWidth>
        <InputLabel id="role">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={'Student'}>Student</MenuItem>
          <MenuItem value={'Lecture'}>Lecture</MenuItem>
        </Select>
      </FormControl>
            
        <Button variant="contained">Register</Button>
        
      </Box>

      <Box  m={4}>
        <Typography align="center" > Already Registered?<Link to={"#"}>Sign In</Link></Typography>
      </Box>
      </Paper>
    </div>
  );
}

export default Register;
