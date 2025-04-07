import React from 'react'
import { FooterContainer } from '../style/FooterStyled'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='contato'>
        <h3>Contato</h3>
        <p>Email: matheus.caposse02@gmail.com</p>
        <p>Telefone: (11)99528-3425</p>
      </div>

      <div className='direitos'>
        <p>&copy; 2025 - Todos os Direitos reservados</p>
      </div>

      <div className='redes-sociais'>
        <h3>Redes Sociais: </h3>
        <ul>
          <li><a href='#' >Facebook</a></li>
          <li><a href='#' >Instagram</a></li>
          <li><a href='#' >Twitter</a></li>
        </ul>
      </div>
    </FooterContainer>
    
  )
}

export default Footer
