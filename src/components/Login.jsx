// import * as React from "react";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate} from "react-router-dom";
// import { Button } from "@mui/material";
import { useLoginMutation } from "../redux/api/authApi";
import { useState } from "react";

export default function Login() {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };



//   return (
//     <Box sx={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
//       <div>
//         <h1>Login</h1>
//         <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
//           <OutlinedInput id="outlined-adornment-password" label="Email" />
//         </FormControl>
//         <br />
//         <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">
//             Password
//           </InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? "text" : "password"}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//           <br />
//           <Button variant="contained" type="submit">
//             Login
//           </Button>

//           <p>
//             No account? <Link to="/auth/register">Sign Up</Link>
//           </p>
//         </FormControl>
//       </div>
//     </Box>
//   );
// }


  // const [cart] = useSessionAddToCartMutation();
  const navigate = useNavigate();
  const [data] = useLoginMutation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await data(form);
    console.log(result);
    navigate("/");
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <label>
            Email: <input type="email" name="email" onChange={onChange}></input>
          </label>
          <label>
            Password
            <input type="password" name="password" onChange={onChange}></input>
          </label>
          <button>Submit</button>
          <p>
             No account? <Link to="/auth/register">Sign Up</Link>
         
          </p>
        </form>
      </div>
    </>
  );
}