import { Link } from "react-router-dom";
import CheckoutButton from "../components/CheckoutButton";

const Cart = ({ cart, setCart }) => {
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      {cart.map((item) => (
        <>
          <div
            className="itemBox"
            key={item.id}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
          <p>${item.price}</p>
        </>
      ))}
      <CheckoutButton cartItems={cart} />
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};

export default Cart;
