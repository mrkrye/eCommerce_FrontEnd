import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../redux/api/productsApi";
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
          <img
            src="https://cdn.leonardo.ai/users/2ca1195f-47ce-42dd-9179-f8d8269808f8/generations/4eed1589-8423-48f5-ac22-43976d84eddb/Default_A_grocery_store_logo_with_the_name_Grocery_AI_0.jpg?w=512"
            alt="logo"
            className="loading_logo"
          />
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
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}

export default SingleProduct;
