import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/api/api";

const Products = () => {
  const nav = useNavigate();
  const { data, isLoading } = useGetAllProductsQuery();
  console.log(data);
  return (
    <>
      <div className="products">
        {isLoading ? (
          <h1>Loading Products...</h1>
        ) : (
          data.map((itm) => (
            <div key={itm.id} className="product-container">
              <div className="product-image-container">
                <img src={itm.imageUrl} alt={itm.name} />
              </div>
              <div className="product-details">
                <h1>{itm.name}</h1>
                <p>{itm.price}</p>
                <p>{itm.description}</p>
                <p>{itm.inStock}</p>
                <button onClick={() => nav(`/products/${itm.id}`)}>
                  See Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Products;
