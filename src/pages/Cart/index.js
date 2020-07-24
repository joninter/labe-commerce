import React, { useState, useEffect } from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import { toast } from "react-toastify";

import { formatPrice } from "../../util/format";
import Header from "../../components/Header";

import { Container, ProductTable, Total } from "./styles";

function Cart() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const storage = localStorage.getItem("carrinho");
    if (storage) {
      setItem(JSON.parse(storage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(item);

  function increment(id) {
    const productIndex = item.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      item[productIndex].amount += 1;
      setItem([...item]);
      localStorage.setItem("carrinho", JSON.stringify(item));
    }

    console.log(item);
  }
  function decrement(id) {
    const productIndex = item.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      if (item[productIndex].amount <= 0) {
        return item[productIndex].amount;
      }
      item[productIndex].amount -= 1;
      setItem([...item]);
      localStorage.setItem("carrinho", JSON.stringify(item));
    }
  }

  function removeFromCart(id) {
    const productIndex = item.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      item.splice(productIndex, 1);
      toast.error("Item removido do carrinho 😢 ");
    }
    setItem([...item]);
    localStorage.setItem("carrinho", JSON.stringify(item));
  }

  return (
    <>
      <Header />

      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {item.map((product) => (
              <tr>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{formatPrice(product.price)}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product.id)}>
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product.id)}>
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{formatPrice(product.price * product.amount)}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <MdDelete size={20} color="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <button type="button">Finalizar Pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>
              {formatPrice(
                item.reduce((total, product) => {
                  return total + product.price * product.amount;
                }, 0)
              )}
            </strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}

export default Cart;
