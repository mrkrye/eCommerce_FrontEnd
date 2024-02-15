import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function Register() {
  return (
    <div>
      <NavBar />

      <form>
        <h1>Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
          />
        </div>
        <div>
          <input
            type="password"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
          />
        </div>

        <Button size="small" type="submit">Sign Up</Button>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
