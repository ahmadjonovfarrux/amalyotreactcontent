import { useGlobalContext } from "../context/useGlobalContext";
import { MdClose } from "react-icons/md";

function YourCart() {
  const { cart: cart, dispatch, totalPrice } = useGlobalContext();

  return (
    <div className="yourCart-container">
      {/* yourCart */}
      <div className="yourCart-box">
        <h1 className="yourCart-title">Your cart</h1>

        <div className="emptyCard-box">
          {cart.length &&
            cart.map((p) => {
              const { image, stock, price, id, title, amount } = p;
              return (
                <div className="cartModal-container" key={id}>
                  <img
                    className="cartModal-img"
                    src={image}
                    alt="image of product"
                    width="50"
                  />
                  <div className="cartModal">
                    <h3 className="cartModal-title">{title}</h3>
                    <div className="cartModal-box">
                      <p className="cartModal-amount">
                        {amount}x <p className="cartModal-price">{price}$</p>
                      </p>

                      <p className="cartModal-total">
                        Total Price: {price * amount}$
                      </p>
                    </div>
                  </div>
                  <MdClose
                    className="cartModal-icon"
                    onClick={() => {
                      dispatch({ type: "DELETE", payload: p.id });
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="totalPrice-container">
          <h3>Total Order</h3>
          <h3>${totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}

export default YourCart;
