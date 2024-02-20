import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Register() {
    const { token } = useSelector((state) => state.authSlice);
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
  };

   useEffect(() => {
     const cart = () => {
       navigate("/auth/login");
     };
     if (token) cart();
   }, [token, navigate]);

  return (
    <div className="loginPage">
      {!token && (
        <form onSubmit={onSubmit} className="form">
          <h1 className="display-2">Sign Up</h1>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstname"
              onChange={onChange}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastname"
              onChange={onChange}
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
          <button type="submit" className="btn btn-primary mb-2">
            Sign Up
          </button>
          <p>
            Have an account? <Link to={"/auth/login"}>Login</Link>
          </p>
        </form>
      )}
    </div>
  );
}
