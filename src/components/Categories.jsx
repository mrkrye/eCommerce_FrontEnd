import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../redux/api/categoriesApi";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Categories = () => {
  const nav = useNavigate();
  const { data, isLoading } = useGetAllCategoriesQuery();

  return (
    <>
      <Grid container spacing={2}>
        {isLoading ? (
          <h1>Loading Categories...</h1>
        ) : (
          data.map((itm) => (
            <Grid key={itm.id} item xs={3} md={2.4} lg={2}>
              <CardActionArea onClick={() => nav(`/categories/${itm.id}`)}>
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
export default Categories;
