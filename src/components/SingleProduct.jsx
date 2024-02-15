import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../redux/api/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function SingleProduct() {
  const nav = useNavigate();
  const params = useParams();
  const { data, isLoading } = useGetProductByIdQuery(params.id);

  return (
    <>
      <div>
        {isLoading ? (
          <h1>Loading Product...</h1>
        ) : (
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
              <Button size="small" onClick={() => nav("/products")}>
                Return to All Products
              </Button>
              <Button size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        )}
      </div>
    </>
  );
}

export default SingleProduct;
