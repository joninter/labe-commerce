import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdAddShoppingCart, MdShoppingBasket, MdSearch } from "react-icons/md";
import { formatPrice } from "../../util/format";

import { Container, Cart, ProductList, Search, Filters } from "./styles";

import logo from "../../assets/images/logo.png";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "Tênis Olympikus Breed 2",
      price: 89.99,
      image:
        "https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/02/D22-3195-002/D22-3195-002_zoom1.jpg?ts=1571247200&ims=326x",
      amount: 0,
    },
    {
      id: 1,
      title: "Tênis Nike Revolution 5",
      price: 229.99,
      image:
        "https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&ims=326x",
      amount: 0,
    },
    {
      id: 2,
      title: "Tênis Adidas Lite Racer Cln",
      price: 229.9,
      image:
        "https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/12/COL-7070-012/COL-7070-012_detalhe1.jpg?ts=1584624042?ims=280x280",
      amount: 0,
    },
    {
      id: 3,
      title: "Tênis Nike Air Max Oketo",
      price: 199.99,
      image:
        "https://static.netshoes.com.br/produtos/tenis-nike-air-max-oketo-masculino/72/HZM-0636-172/HZM-0636-172_detalhe1.jpg?ts=1579801097?ims=280x280",
      amount: 0,
    },
    {
      id: 4,
      title: "Tênis Olympikus Easy Feminino",
      price: 109.99,
      image:
        "https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/10/D22-2763-010/D22-2763-010_detalhe1.jpg?ts=1587075491?ims=280x280",
      amount: 0,
    },
    {
      id: 5,
      title: "Tênis Puma Pacer Next Cage",
      price: 199.99,
      image:
        "https://static.netshoes.com.br/produtos/tenis-puma-pacer-next-cage/06/D14-4091-006/D14-4091-006_detalhe1.jpg?ts=1588766597?ims=280x280",
      amount: 0,
    },
    {
      id: 6,
      title: "Tênis de Caminha Leve Confortável",
      price: 79.9,
      image:
        "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/10/E74-0492-010/E74-0492-010_detalhe1.jpg?ts=1586961613?ims=280x280",
      amount: 0,
    },
    {
      id: 7,
      title: "Tênis Adidas Lite Racer RBN",
      price: 279.99,
      image:
        "https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-rbn-masculino/06/COL-7150-006/COL-7150-006_detalhe1.jpg?ts=1584965712?ims=280x280",
      amount: 0,
    },
    {
      id: 8,
      title: "Tênis Adidas Run Falcon Masculino",
      price: 169.99,
      image:
        "https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/18/COL-6981-018/COL-6981-018_detalhe1.jpg?ts=1584624168?ims=280x280",
      amount: 0,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [valueMin, setValueMin] = useState(1);
  const [valueMax, setValueMax] = useState(90000);
  const [order, setOrder] = useState(false);
  const storage = localStorage.getItem("carrinho");

  useEffect(() => {
    if (storage) {
      setCartItems(JSON.parse(storage));
    }
    const data = products.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    setProducts(...products, JSON.parse(storage));
    setProducts(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const SearchInsensitive = new RegExp(search, "gi");

  function handleAddProduct(id) {
    const productIndex = products.findIndex((p) => p.id === id);

    const findProduct = cartItems.findIndex((p) => p.id === id);

    if (findProduct !== -1) {
      cartItems[findProduct].amount += 1;
      setCartItems([...cartItems]);
      localStorage.setItem("carrinho", JSON.stringify(cartItems));
      toast.success("Item adicionado ao carrinho 😀");
    } else {
      products[productIndex].amount += 1;
      setCartItems([...cartItems, products[productIndex]]);
      localStorage.setItem("carrinho", JSON.stringify(cartItems));
      toast.success("Item adicionado ao carrinho 😀");
    }
  }

  function hadleSearchProducts(e) {
    setSearch(e.target.value);
  }

  function hadleValueMinimum(e) {
    setValueMin(Number(e.target.value));
  }

  function hadleValueMaximum(e) {
    setValueMax(Number(e.target.value));
  }

  function orderProducts() {
    if (order) {
      let order = [...products].sort((a, b) => a.price - b.price);
      setProducts(order);
      setOrder(false);
    } else {
      let order = [...products].sort((a, b) => b.price - a.price);
      setProducts(order);
      setOrder(true);
    }
  }
  return (
    <>
      {/* <Header items={cartItems} />; */}
      <Container>
        <Link to="/">
          <img src={logo} alt="LabeStore" />
        </Link>
        <input
          onChange={hadleSearchProducts}
          placeholder="Pesquise seu produto"
        />
        <Search>
          <MdSearch size={20} color="#13abe1" />
        </Search>

        <Cart to="/cart" items={cartItems}>
          <div>
            <strong>Meu carrinho</strong>

            <span>{cartItems.length} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Container>

      <Filters>
        <label>Valor mínimo</label>
        <input onChange={hadleValueMinimum} type="number" min={0} />
        <label>Valor máximo</label>
        <input onChange={hadleValueMaximum} type="number" />
        <label>Ordenar Preço</label>
        <select onChange={orderProducts}>
          <option>Menor Valor</option>
          <option>Maior Valor</option>
        </select>
      </Filters>

      <ProductList>
        {products.map((product) => {
          if (
            product.title.match(SearchInsensitive) &&
            product.price > valueMin &&
            product.price < valueMax
          ) {
            return (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
                <button
                  type="button"
                  onClick={() => handleAddProduct(product.id)}
                >
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                    {product.amount}
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
                </button>
              </li>
            );
          } else {
            return console.log();
          }
        })}
      </ProductList>
    </>
  );
}
