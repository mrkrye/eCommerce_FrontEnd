import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../redux/api/api";

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
          <div>
            <img src={data.imageUrl} alt={data.name} />
            <h1>{data.name}</h1>
            <p>{data.price}</p>
            <p>{data.description}</p>
            <p>{data.inStock}</p>
            <button onClick={() => nav("/")}>Return to All Products</button>
          </div>
        )}
      </div>
    </>
  );
}

export default SingleProduct;
