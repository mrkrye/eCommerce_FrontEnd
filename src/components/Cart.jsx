import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery, useDeleteProductMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router";

export default function Cart() {
  const { token, user } = useSelector((state) => state.authSlice);
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();

  const check = () => {
    useEffect(() => {
      navigate("/login");
    }, []);
  };
  if (!token) check();
  if (token) {
    useGetUserQuery(token, { refetchOnMountOrArgChange: true });
  }

  const [data, setData] = useState(user);
  const removeProduct = async (e) => {
     await deleteProduct({ token: token, id: e.target.id });
    setData([]);
  };
  return (
    token &&
    user && (
      <div>
        <div>
          <blockquote className="blockquote text-center">
            <p className="mb-2">
              Hi {user.firstName} {user.lastName}!
              <br />
              {user.email}
            </p>
          </blockquote>
        </div>
        <div className="bookBody">
          {!data.length && (
            <div style={{ display: "grid", justifyItems: "center" }}>
              <h1 className="display-3">Cart is Empty</h1>
            </div>
          )}
          {!data.map((itm) => {
              return (
                <div key={itm.id} className="card">
                  <img
                    src={itm.coverimage}
                    className="card-img-top"
                    alt={itm.title}
                  />
                  <div className="card-body">
                    <p className="card-text">ID: {itm.id}</p>
                    <p className="card-text">{itm.firstName}</p>
                    <p className="card-text">{itm.lastName}</p>
                  </div>
                  <button
                    id={itm.id}
                    className="btn btn-danger"
                    onClick={removeProduct}
                  >
                    Remove
                  </button>
                </div>
              );
            })
          }
        </div>
      </div>
    )
  );
}
