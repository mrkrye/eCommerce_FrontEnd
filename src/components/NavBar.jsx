import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <header>
        <nav>
          <a>
            <Button size="small" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button size="small" onClick={() => navigate("/products")}>
              Products
            </Button>
            <Button size="small"  onClick={() => navigate("/login")}>
              Login
            </Button>
          </a>
        </nav>
      </header>
    </div>
  );
}
