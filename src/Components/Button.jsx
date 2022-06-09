import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
padding: 0 1rem;
background-color: var(--color-bg);
box-shadow:var(--shadow);
line-height:2.5;
border-radius:var(--radii);

border:none;
display:flex;
align-items:center;
gap:0.75rem;

color:var(--color-text);
cursor:pointer;
`

const Button = ({ children, ...props }) => {
   return (
      <StyledButton {...props}>{children}</StyledButton>
   )
}

export default Button