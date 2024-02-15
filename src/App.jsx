import { Route, Routes } from "react-router";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/products"} element={<Products />}></Route>
          <Route path={"/products/:id"} element={<SingleProduct />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
