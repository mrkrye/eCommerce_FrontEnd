// import * as React from "react";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import { useSelector } from "react-redux";
import { useRegisterMutation } from "../redux/api/authApi";
import { useState } from "react";

export default function Register() {

  // const [showPassword, setShowPassword] = React.useState(false);
  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  const [addNewUser] = useRegisterMutation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const results = addNewUser(form);
    console.log(results);
    navigate("/auth/login");


  return (
    // <Box sx={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
    //   <div>
    //     <h1>Register</h1>
    //     <form onSubmit={onSubmit}>
    //       <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
    //         <InputLabel
    //           htmlFor="outlined-adornment-password"
    //           onChange={onChange}
    //         >
    //           First Name
    //         </InputLabel>
    //         <OutlinedInput
    //           id="outlined-adornment-password"
    //           label="First Name"
    //         />
    //       </FormControl>
    //       <br />
    //       <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
    //         <InputLabel
    //           htmlFor="outlined-adornment-password"
    //           onChange={onChange}
    //         >
    //           Last Name
    //         </InputLabel>
    //         <OutlinedInput
    //           id="outlined-adornment-password"
    //           label=" Last Name"
    //         />
    //       </FormControl>
    //       <br />
    //       <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
    //         <InputLabel
    //           htmlFor="outlined-adornment-password"
    //           onChange={onChange}
    //         >
    //           Email
    //         </InputLabel>
    //         <OutlinedInput id="outlined-adornment-password" label="Email" />
    //       </FormControl>
    //       <br />
    //       <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
    //         <InputLabel
    //           htmlFor="outlined-adornment-password"
    //           onChange={onChange}
    //         >
    //           Password
    //         </InputLabel>
    //         <OutlinedInput
    //           id="outlined-adornment-password"
    //           type={showPassword ? "text" : "password"}
    //           endAdornment={
    //             <InputAdornment position="end">
    //               <IconButton
    //                 aria-label="toggle password visibility"
    //                 onClick={handleClickShowPassword}
    //                 onMouseDown={handleMouseDownPassword}
    //                 edge="end"
    //               >
    //                 {showPassword ? <VisibilityOff /> : <Visibility />}
    //               </IconButton>
    //             </InputAdornment>
    //           }
    //           label="Password"
    //         />
    //         <br />
    //         <Button variant="contained" type="submit">
    //           Register
    //         </Button>

    //         <p>
    //           Have an account? <Link to="/login">Login</Link>
    //         </p>
    //       </FormControl>
    //     </form>
    //   </div>
    // </Box>
    <div className="loginPage">
      <form onSubmit={onSubmit} className="form">
        <h1 className="display-2">Sign Up</h1>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={onChange}
            required
          />
        </div>
        {/* <p className="text-danger">{message}</p> */}
        <button type="submit" className="btn btn-primary mb-2">
          Sign Up
        </button>
        <p>
          Have an account? <Link to="/auth/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
