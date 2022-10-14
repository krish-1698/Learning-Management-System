import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
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

  //select
  const [age, setAge] = React.useState("");

  //return
  return (
    <div align="center">
      <Paper elevatio={20} sx={{}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img
              alignItems="center"
              alt="HomePage"
              width="100%"
              height="90%"
              sx={{mt:"2vw"}}
              src={
                "https://img.freepik.com/free-vector/digital-presentation-concept-illustration_114360-8175.jpg?w=2000"
              }
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "40vw" } }}
              noValidate
              autoComplete="off"
            >
              <Box p={2}>
                <h1>Register</h1>
              </Box>

              <TextField id="studentId" label="Student Id" variant="outlined" />
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
                  value={age}
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
                {" "}
                Already Registered?<Link to={"#"}>Sign In</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Register;
