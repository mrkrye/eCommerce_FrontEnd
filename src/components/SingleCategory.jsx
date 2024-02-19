import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useGetCategoryByIdQuery } from "../redux/api/categoriesApi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea, Button } from "@mui/material";

function SingleCategory() {
  const nav = useNavigate();
  const params = useParams();
  const { data, isLoading } = useGetCategoryByIdQuery(params.id);

  return (
    <>
      <div>
        <Grid container spacing={2}>
          {isLoading ? (
            <h1>Loading Category...</h1>
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
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))
          )}
        </Grid>
        <div>
          <div>
            <Button size="small" onClick={() => nav(-1)}>
              Back to Categories
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCategory;
