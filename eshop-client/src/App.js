import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Styling
import "./App.css";
import CreateAccount from "./pages/CreateAccount";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckoutCancel from "./pages/CheckoutCancel";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import NotFound from "./pages/NotFound";
import Credits from "./pages/Credits";
import NewArrivals from "./pages/NewArrivals";
import OnSale from "./pages/OnSale";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<CreateAccount />} />
        <Route
          path="/"
          exact
          element={<Home cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/checkout-fail" element={<CheckoutCancel />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/on-sale" element={<OnSale />} />
      </Routes>
      <section></section>
    </Router>
  );
}

export default App;
