import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MdShoppingBasket } from "react-icons/md";

import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.png";

function Header({ items }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const storage = localStorage.getItem("carrinho");
    if (storage) {
      setItem(JSON.parse(storage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(item);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="LabeStore" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>

          <span>{item.length}itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;

/*
<Container>
        <Link to="/">
          <img src={logo} alt="LabeStore" />
        </Link>
        <Cart to="/cart" items={cartItems}>
          <div>
            <strong>Meu carrinho</strong>

            <span>{cartItems.length} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Container> */
