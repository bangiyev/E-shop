import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import "../index.css";

const Home = ({ cart, setCart }) => {
  const [homeItems, setHomeItems] = useState([
    {
      name: "Blue Gradient",
      price: "199",
      id: 1,
      image:
        "https://images.pexels.com/photos/6985265/pexels-photo-6985265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Gray Marble",
      price: "299",
      id: 2,
      image:
        "https://png.pngtree.com/background/20210715/original/pngtree-gray-gradient-metal-rust-texture-background-picture-image_1311702.jpg",
    },
    {
      name: "Honeycomb",
      price: "249",
      id: 3,
      image:
        "https://t3.ftcdn.net/jpg/02/94/27/70/360_F_294277006_pFDh10OfLuej79sFedbidqrmtYImSeu8.jpg",
    },
  ]);

  const addToCart = (newItem) => {
    let itemInCart = false;
    console.log(newItem);
    if (cart.length === 0) {
      console.log("0 length");
      setCart([newItem]);
    } else {
      cart.map((item) => {
        if (item.id === newItem.id) {
          console.log("already in cart");
          itemInCart = true;
        }
      });
    }
    if (!itemInCart) {
      setCart([...cart, newItem]);
    }
    console.log(cart);
  };
  return (
    <>
      {homeItems.map((item) => (
        <div>
          <div
            className="itemBox"
            key={item.id}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <button onClick={() => addToCart(item)}>+ Add</button>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Home;
