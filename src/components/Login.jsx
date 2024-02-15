import NavBar from './NavBar';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>Login</div>
      <p>
        No account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
}
