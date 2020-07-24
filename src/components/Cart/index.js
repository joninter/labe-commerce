import React, { useState, useEffect } from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { formatPrice } from "../../util/format";

import { Container, ProductTable, Total } from "./styles";

function Cart({ cartItems }) {
  const [items, setItems] = useState([cartItems]);

  /* useEffect(() => {
    const data = items.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    setItems(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  function increment(product) {}
  function decrement(product) {}
  return (
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
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>
              <strong>tenis</strong>
              <span>20,00</span>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => decrement()}>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={20} />
                <button type="button" onClick={() => increment()}>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>200,00</strong>
            </td>
            <td>
              <button type="button" onClick={() => {}}>
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
          <strong>200</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
