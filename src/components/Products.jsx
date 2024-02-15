import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/api/api";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Products = () => {
  const nav = useNavigate();
  const { data, isLoading } = useGetAllProductsQuery();
  console.log(data);
  return (
    <>
      <Grid container spacing={2}>
        {isLoading ? (
          <h1>Loading Products...</h1>
        ) : (
          data.map((itm) => (
            <Grid key={itm.id} item xs={3} md={2.4} lg={2}>
              <CardActionArea onClick={() => nav(`/products/${itm.id}`)}>
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
