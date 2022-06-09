import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import { Container } from './Container';
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
box-shadow:var(--shadow);
background-color:var(--color-ui-base);
`
const Wrapper = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
`
const Title = styled(Link).attrs({
   to: '/'
})`
color:var(--color-text);
font-size:var(--fs-sm);
text-decoration:none;
font-weight:var(--fw-bold);
`
const ModeSwitcher = styled.div`
color:var(--color-text);
font-size:var(--fs-sm);
cursor:pointer;
font-weight:var(--fw-bold);
text-transform:capitalize;
`

const Header = () => {
   const [theme, setTheme] = useState('light')
   useEffect(() => {
      document.body.setAttribute('data-theme', theme)
   }, [theme])
   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }
   return (
      <StyledHeader>
         <Container>
            <Wrapper>
               <Title>Where is the world?</Title>
               <ModeSwitcher onClick={toggleTheme} >
                  {
                     theme === 'light'
                        ? <><IoMoonOutline size='16px' /> <span style={{ marginLeft: '.5rem' }}>{theme} Mode</span></>
                        : <><IoMoonSharp size='16px' /> <span style={{ marginLeft: '.5rem' }}>{theme} Mode</span></>
                  }
               </ModeSwitcher>
            </Wrapper>
         </Container>
      </StyledHeader>
   )
}

export default Header