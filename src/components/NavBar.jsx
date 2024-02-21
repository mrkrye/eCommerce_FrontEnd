import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import CartBadge from "./CartBadge";
import { useSelector } from "react-redux";
import {setToken} from "../redux/slices/authSlice"
import { useDispatch } from "react-redux";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authSlice);

  return (
    <Box sx={{ flexGrow: 1 }} margin="0px 0px 20px">
      <AppBar position="fixed">
        <Toolbar>
          <img
            src="https://cdn.leonardo.ai/users/2ca1195f-47ce-42dd-9179-f8d8269808f8/generations/4eed1589-8423-48f5-ac22-43976d84eddb/Default_A_grocery_store_logo_with_the_name_Grocery_AI_0.jpg?w=512"
            alt="logo"
            className="logo"
          />
          <a>
            <Button
              variant="h6"
              component="div"
              edge="start"
              onClick={() => navigate("/")}
            >
              Grocery Store
            </Button>
          </a>
          <a>
            <Button color="inherit" onClick={() => navigate("/products")}>
              Products
            </Button>
          </a>
          <a>
            <Button color="inherit" onClick={() => navigate("/categories")}>
              Categories
            </Button>
          </a>
          <a>
            {!token && (
              <Button color="inherit" onClick={() => navigate("/auth/login")}>
                Login
              </Button>
            )}
          </a>
          {/* Account and Logout button needs to take in Token in order to display */}
          <a>
            {token && (
              <Button color="inherit" onClick={() => navigate("/users")}>
                Users
              </Button>
            )}
          </a>
          <a>
            {token && (
              <Button
                color="inherit"
                onClick={() => {
                  dispatch(setToken(null));
                }}
              >
                Logout
              </Button>
            )}
          </a>
          <CartBadge />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
