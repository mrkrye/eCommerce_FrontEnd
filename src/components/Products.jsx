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

const Products = () => {
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
