import React from "react";
import Produto from "./Produto";

// import { Container } from './styles';

function Filtro(props) {
  const handleChange = (event) => {
    let opcao = event.target.value;
    if (opcao === "1") {
      props.valor.sort(function (a, b) {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      });
    } else {
      props.valor.sort(function (a, b) {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
      });
    }
    console.log(props.valor);
  };
  const comparaProduto = (event) => {
    console.log(event.target.value);
    this.state.products.filter((produto) => {
      if (produto.name === event.target.value) return event.target.value;
    });
    return (
      <div>
        <select onChange={handleChange()}>
          <option value="">Selecione uma opção</option>
          <option value={"valor"}>Crescente</option>
          <option value={"valor"}>Decrescente</option>
        </select>
      </div>
    );
  };
}

export default Filtro;
