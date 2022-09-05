import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../serverURLs/api";

const CheckoutButton = ({ cartItems }) => {
  const handleCheckout = () => {
    console.log(cartItems);
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button className="checkoutButton" onClick={() => handleCheckout()}>
        Checkout
      </button>
    </>
  );
};

export default CheckoutButton;
