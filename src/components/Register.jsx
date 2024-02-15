
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <div>
          <input type="text" placeholder="First Name" name="firstname" />
        </div>
        <div>
          <input type="text" placeholder="Last Name" name="lastname" />
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

        <button type="submit">Sign Up</button>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
