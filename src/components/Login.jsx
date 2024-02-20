import { Link, useNavigate} from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Login() {
  const { token } = useSelector((state) => state.authSlice);
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
   
  };

   useEffect(() => {
     const cart = () => {
       navigate("/cart");
     };
     if (token) cart();
   }, [token, navigate]);

  return (
    <div className="loginPage">
      {!token && (
        <form onSubmit={onSubmit} className="form">
          <h1 className="display-2">Login</h1>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
              onChange={onChange}
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
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Login
          </button>
          <p>
            No Account?
            <Link to={"/auth/register"}> Sign up</Link>
          </p>
        </form>
      )}
    </div>
  );
}