import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function Home() {
  const nav = useNavigate();
  return (
    <>
      <div>
        <Button onClick={() => nav("/products")}>Shop all Products</Button>
      </div>
      <div>
        <Button onClick={() => nav("/categories")}>Shop by Category</Button>
      </div>
    </>
  );
}

export default Home;
