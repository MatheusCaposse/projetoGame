import React from 'react'
import { ProdutoContainer } from '../style/ProdutoStyled'

//props - vai pegar dados de outro local
const Produtos = ({imagem, titulo, descricao, preco}) => {
  return (
    <article className='produto'>
      <ProdutoContainer>
        <img src={imagem} alt={titulo}/>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <p>{preco}</p>
        <button>Comprar</button>
      </ProdutoContainer>
      
    </article>
  )
}

export default Produtos
