import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HomeTop from "../components/HomeTop";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [subTotal, setsubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (mycart) => {
    localStorage.setItem("cart", mycart);
    let subT = 0;
    let keys = Object.keys(cart);
    for (let i = 0; keys.length; i++) {
      subT += mycart[keys[i]].price * mycart[keys[i]].qty;
    }
    setsubTotal(subT);
  };

  const addToCart = (id, name, qty, price,imgId) => {
    let myCart = cart;
    if (id in cart) {
      myCart[id].qty = cart[id].qty + qty;
    } else {
      myCart[id] = { qty: 1, price, name,imgId };
    }

    setcart(myCart);
    saveCart(myCart);
  };
  const removeFromCart = (id,qty) => {
    let myCart = cart;
    if (id in cart) {
      myCart[id].qty = cart[id].qty - qty;
    }

    if (myCart[id]["qty"] <= 0) {
      delete myCart[id];
    }
    setcart(myCart);
    saveCart(myCart);
  };

  const clearCart = () => {
    setcart({});
    saveCart({});
  };
  return (
    <>
    <Head>
        <title>Dotin India - Experience The Best</title>
        <meta name="description" content="Dotin India website" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <HomeTop
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
