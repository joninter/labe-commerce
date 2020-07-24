import React from 'react'
import styled from 'styled-components'

const Imagem = styled.img`
  width: 200px;
  height: 220px;
  margin: 5px;
  object-fit: cover;
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #e6e6e6;
  border: 1px dashed orange;
  width: 210px;
  height: 390px;
`
const P = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  margin: 6px;
  text-align: left;
`
const Button = styled.button`
  margin: 5px;
  margin-top: 10px;
  color: white;
  background-color: black;
  font-family: 'Work Sans', sans-serif;
  width: 200px;
  height: 70px;
  font-size: 20px;
  border: none;
  :hover {
    background-color: orange ;
  }
`
function onClickBotaoComprar () {
  
}

class Produto extends React.Component {
  render() {
    return (
      <Main>
        <Imagem 
          src={this.props.imagemProduto} 
          alt={'Imagem do produto'}
          title={'Imagem do Produto'}
        />
        <P>{this.props.nomeProduto}</P>
        <P>R$ {this.props.precoProduto}</P>
        <Button onClick={this.props.onClickBotaoComprar}>Adicionar ao carrinho</Button>
      </Main>
    )
  }
}

export default Produto;