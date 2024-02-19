import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function Home() {
  const nav = useNavigate();
  return (
    <>
      <div>
        <img id="home_img"
          src="https://cdn.leonardo.ai/users/2ca1195f-47ce-42dd-9179-f8d8269808f8/generations/fbc9a475-65a5-4db8-8d99-814fe4f81b3b/Default_Ketch_up_as_a_grocery_photo_0.jpg"
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
