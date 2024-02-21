// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   useGetAllOrdersQuery,
//   useDeleteProductMutation,
// } from "../redux/api/ordersApi";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Typography,
//   Button,
// } from "@mui/material";

// const Cart = () => {
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]);
//   const { data, isLoading } = useGetAllOrdersQuery();
//   const [deleteProduct] = useDeleteProductMutation();
//   useEffect(() => {
//     if (!isLoading) {
//       setOrders(data);
//     }
//   }, [data, isLoading]);
//   const handleDelete = async (orderId) => {
//     try {
//       await deleteProduct({ token: "token", id: orderId });
//       setOrders(orders.filter((order) => order.id !== orderId));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };
//   return (
//     <>
//       <h1>Your Cart</h1>
//       {isLoading ? (
//         <h2>Loading...</h2>
//       ) : (
//         <Grid container spacing={2}>
//           {orders.map((order) => (
//             <Grid key={order.id} item xs={12} md={6} lg={4}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={order.product.imageUrl}
//                   alt={order.product.name}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {order.product.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Price: {order.product.price}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Quantity: {order.quantity}
//                   </Typography>
//                   <Button onClick={() => handleDelete(order.id)}>
//                     Remove from Cart
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//       <Button onClick={() => navigate("/checkout")}>Proceed to Checkout</Button>
//     </>
//   );
// };
// export default Cart;



export default function Cart() {
  return (
    <div>Cart</div>
  )
}
