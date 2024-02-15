import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <header>
        <nav>
          <a>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/products")}>Products</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </a>
        </nav>
      </header>
    </div>
  );
}
