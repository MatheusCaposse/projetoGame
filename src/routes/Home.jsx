import React from 'react'
import Produtos from './Produtos'
import { ProdutoContainer } from '../style/ProdutoStyled'

const Home = ({Dados}) => {
  return (
    <div>
      {Dados.map((produto)=>{
        <Produtos
          key={produto.id}
          imagem={produto.imagem}
          titulo = {produto.titulo}
          descricao = {produto.descricao}
          preco = {produto.preco}
        />
      })}
    </div>
  )
}

export default Home
