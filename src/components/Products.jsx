import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/api/productsApi";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
// import { useSelector } from "react-redux";
// import { useUpdateProductMutation } from "../redux/api/productsApi";
// import { useState } from "react";

const Products = () => {
  // const { products } = useSelector((state) => state.productsSlice);

  // const {token} = useSelector((state) => state.authSlice)
  // const [updateProduct] = useUpdateProductMutation();
  // const [filteredData, setFilteredData] = useState(products)
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <Grid container spacing={2}>
        {isLoading ? (
          <img
            src="https://cdn.leonardo.ai/users/2ca1195f-47ce-42dd-9179-f8d8269808f8/generations/4eed1589-8423-48f5-ac22-43976d84eddb/Default_A_grocery_store_logo_with_the_name_Grocery_AI_0.jpg?w=512"
            alt="logo"
            className="loading_logo"
          />
        ) : (
          data.map((itm) => (
            <Grid key={itm.id} item xs={3} md={2.4} lg={2}>
              <CardActionArea onClick={() => navigate(`/products/${itm.id}`)}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={itm.imageUrl}
                    alt={itm.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {itm.name}
                    </Typography>
                    <Typography>{itm.price}</Typography>
                    <Typography gutterBottom>
                      In Stock: {itm.inStock}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};
export default Products;


/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. 
Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useUpdateProductMutation } from "../redux/api/productsApi";

// export default function Products() {
//   const { books } = useSelector((state) => state.productSlice);
//   const { token } = useSelector((state) => state.authSlice);
//   const [updateBook] = useUpdateProductMutation();
//   const [filteredData, setFilteredData] = useState(books);
//   const navigate = useNavigate();

//   /* Targets input values and displays books that match input to title */
//   const filterBooks = (e) => {
//     setFilteredData(
//       books.filter((book) =>
//         book.title.toLowerCase().includes(e.target.value.toLowerCase())
//       )
//     );
//   };
//   /* Filters book that are available to checkout and updates its API, only accessible when authenticated with token */
//   const checkoutBook = async (e) => {
//     const availability = {
//       id: e.target.name,
//       token: token,
//       body: { available: false },
//     };
//     const result = await updateBook(availability);
//     setFilteredData(
//       books.map((book) => {
//         return result.data.book.id === book.id
//           ? { ...book, available: result.data.book.available }
//           : book;
//       })
//     );
//   };
//   return (
//     <div>

//       <div className="input-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search Book"
//           onChange={filterBooks}
//         />
//       </div>
//       <div className="books">
//         {filteredData.map((itm) => {
//           return (
//             <div key={itm.id} className="card">
//               <img
//                 src={itm.coverimage}
//                 className="card-img-top"
//                 alt={itm.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{itm.title}</h5>
//                 <p className="card-text">{itm.author}</p>
//                 <p className="card-text">ID: {itm.id}</p>
//               </div>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => {
//                   navigate(`/book/${itm.id}`);
//                 }}
//               >
//                 See Details
//               </button>{" "}
//               {itm.available && token && (
//                 <button
//                   name={itm.id}
//                   className="btn btn-success"
//                   onClick={checkoutBook}
//                 >
//                   Checkout
//                 </button>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
