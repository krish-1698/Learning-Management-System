import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
    <div>
      <Box component="form" sx={{"& > :not(style)": { m: 2, width: "50vw"} }} noValidate autoComplete="off">
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
    </div>
  );
}

export default Register;
