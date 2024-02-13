import { Route, Routes } from "react-router";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path={"/"} element={<Products />}></Route>
          <Route path={"/products/:id"} element={<SingleProduct />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
