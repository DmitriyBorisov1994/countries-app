import styled from 'styled-components'
import React from 'react'
import { Container } from './Container'

const StyledMain = styled.main`
   padding:1rem 0rem;
   @media(min-width: 767px){
      padding:2rem 0rem;
   }
`

const Main = ({ children }) => {
   return (
      <StyledMain>
         <Container>
            {children}
         </Container>
      </StyledMain>
   )
}

export default Main
