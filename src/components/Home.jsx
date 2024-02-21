import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function Home() {
  const nav = useNavigate();
  return (
    <>
      <div>
        <img
          id="home_img"
          src="https://cdn.leonardo.ai/users/2ca1195f-47ce-42dd-9179-f8d8269808f8/generations/191bf827-1c1f-42a6-8c26-59e35f7169b0/Default_Goku_holding_carrots_0.jpg"
          alt="landing_page_pic"
        />
      </div>
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
