// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router";
// import { useGetProductByIdQuery, useUpdateProductMutation } from "../redux/api/productsApi";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// function SingleProduct() {
//   const nav = useNavigate();
//   const params = useParams();
//     const { products } = useSelector((state) => state.authSlice);
//   const { token } = useSelector((state) => state.authSlice);

//   const { data, isLoading } = useGetProductByIdQuery(params.id);
//   const [updateProduct] = useUpdateProductMutation();
//   const [display, setDisplay] = useState(products);

//     const checkoutProduct = async (e) => {
//       const availability = {
//         id: e.target.name,
//         token: token,
//         body: { available: false },
//       };
//       const result = await updateProduct(availability);
//       setDisplay(
//         products.map((book) => {
//           return result.data.book.id === book.id
//             ? { ...book, available: result.data.book.available }
//             : book;
//         })
//       );
//     };
//   return (
//     <>
//       <div>
//         {isLoading ? (
//           <img
//             src="https://cdn.leonardo.ai/users/2ca1195f-47ce-42dd-9179-f8d8269808f8/generations/4eed1589-8423-48f5-ac22-43976d84eddb/Default_A_grocery_store_logo_with_the_name_Grocery_AI_0.jpg?w=512"
//             alt="logo"
//             className="loading_logo"
//           />
//         ) : (
//           <div>
//             <Card sx={{ maxWidth: 750 }}>
//               <CardMedia
//                 sx={{ height: 450 }}
//                 image={data.imageUrl}
//                 alt={data.name}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {data.name}
//                 </Typography>
//                 <Typography>{data.price}</Typography>
//                 <Typography gutterBottom>In Stock: {data.inStock}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {data.description}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" onClick={() => nav(-1)}>
//                   Go Back
//                 </Button>
//                 {data.available && token && (
//                   <Button size="small" onClick={checkoutProduct}>Add to Cart</Button>
//                 )}
//               </CardActions>
//             </Card>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default SingleProduct;


import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../redux/api/productsApi"; // Import the useUpdateProductMutation hook
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

function SingleProduct() {
  const nav = useNavigate();
  const params = useParams();
    const { token } = useSelector((state) => state.authSlice);

  const { data, isLoading } = useGetProductByIdQuery(params.id);
  const [updateProduct] = useUpdateProductMutation(); // Initialize the useUpdateProductMutation hook
  const handleAddToCart = async () => {
    try {
      // Update the product to mark it as added to the cart
      await updateProduct({ id: params.id, body: { inCart: true } });
      nav("/cart"); // Navigate to the cart page after adding the product to the cart
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  return (
    <>
      <div>
        {isLoading ? (
          <h1>Loading Product...</h1>
        ) : (
          <div>
            <Card sx={{ maxWidth: 750 }}>
              <CardMedia
                sx={{ height: 450 }}
                image={data.imageUrl}
                alt={data.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography>{data.price}</Typography>
                <Typography gutterBottom>In Stock: {data.inStock}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => nav(-1)}>
                  Go Back
                </Button>
                {/* Call handleAddToCart function when the button is clicked */}
               { token &&(<Button size="small" onClick={handleAddToCart}>
                  Add to Cart
                </Button>)}
              </CardActions>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
export default SingleProduct;