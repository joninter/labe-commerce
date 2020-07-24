import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  input {
    width: 60%;
    height: 5vh;
    border-radius: 20px 20px 20px;
    background: #fff;
    padding-left: 20px;
    border: none;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }

  strong {
    display: block;
    color: #fff;
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;

export const Search = styled.span`
  display: flex;
  flex-direction: row;
  top: 1px;
  color: #13abe1;
  position: relative;
  left: -60px;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 2px 30px 5px;
  color: #fff;
  align-items: center;
  font-size: 15px;

  input {
    margin-right: 9px;
    border-radius: 20px 20px 20px;
    border: none;
    width: 90px;
    padding-left: 20px;
    margin-left: 9px;
  }

  select {
    margin-left: 10px;
    border-radius: 20px 20px 20px;
    border: none;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      background: #5a2d82;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#5A2D82")};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }
      svg {
        margin-right: 5px;
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
