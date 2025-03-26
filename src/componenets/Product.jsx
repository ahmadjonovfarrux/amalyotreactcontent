import { IoMdCart } from "react-icons/io";
import { useGlobalContext } from "../context/useGlobalContext";
import { useEffect } from "react";

function Product({ d }) {
  const { dispatch, cart } = useGlobalContext();
  const { id, title, price, image, stock } = d;

  const alreadyadded = cart.find((d) => d.id === id);

  return (
    <div className="data-card">
      <div className="data-card-box">
        <img src={image} alt="image of product" width="100" height="100" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-price">${price}</p>
          <p className="card-stock">Stock: {stock}</p>
        </div>
      </div>
      {/* button */}
      <div className="btn-wrapper">
        {/* Shop  */}
        {!alreadyadded && (
          <button
            className="btn add-btn"
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: { ...d, amount: 1 } });
            }}
          >
            Add
            <IoMdCart className="card-icon" />
          </button>
        )}
        {/* Increment and Decrement */}
        {alreadyadded && (
          <div className="newBtnWrapper">
            <button
              className="btn newBtn"
              onClick={() => {
                if (alreadyadded.amount == 1) {
                  dispatch({ type: "DELETE", payload: d.id });
                } else {
                  dispatch({ type: "DECREMENT", payload: d.id });
                }
              }}
            >
              -
            </button>
            <h2>{alreadyadded.amount}</h2>
            <button
              className="btn newBtn"
              onClick={() => {
                dispatch({ type: "INCREMENT", payload: d.id });
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
