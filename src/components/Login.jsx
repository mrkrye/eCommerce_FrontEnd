import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Button } from "@mui/material";
export default function Login() {
  return (
    <>
      <div>
        <NavBar />
        <form>
          <h1>Login</h1>

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

          <Button size="small" type="submit">
            Login
          </Button>

          <p>
            No account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
}
