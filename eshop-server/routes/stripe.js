const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  try {
    const line_items = req.body.cartItems.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      };
    });
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/checkout-fail`,
    });
    res.send({ url: session.url });
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
