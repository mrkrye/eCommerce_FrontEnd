import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Admin from "./components/Admin";
// import Missing from "./components/Missing";
import ProtectedRoute from "./components/ProtectedRoute";
import Users from "./components/Users";

function App() {
  return (
    <>
        <NavBar />
      <div>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            {/* {public routes} */}
            <Route path="/" element={<Home />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<SingleCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/users" element={<Users />} />

            {/* Protected route */}
            <Route element={<ProtectedRoute />}>
              <Route
                path={"/Admin"}
                allowedRoles={["admin"]}
                element={<Admin />}
              />
            </Route>

            {/* {Catch all} */}
            {/* <Route path="*" element={<Missing />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
