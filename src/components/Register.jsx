import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
      <div>
        <h1>Register</h1>
        <form >
           <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            First Name
          </InputLabel>
          <OutlinedInput id="outlined-adornment-password" label="First Name" />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Last Name
          </InputLabel>
          <OutlinedInput id="outlined-adornment-password" label=" Last Name" />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput id="outlined-adornment-password" label="Email" />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <br />
          <Button variant="contained" type="submit">
            Register
          </Button>

          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </FormControl>
        </form>
       
      </div>
    </Box>
  );
}
