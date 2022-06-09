import styled from 'styled-components'
import { IoSearchSharp } from 'react-icons/io5'
import React from 'react'


export const InputContainer = styled.label`
   background:var(--color-ui-base);
   padding:1rem 2rem;
   display:flex;
   align-items:center;
   border-radius:var(--radii);
   box-shadow:var(--shadow);
   width:100%;
   margin-bottom:1.5rem;
   @media(min-width:767px){
      margin-bottom:0rem;
      width:280px;
   }
`
export const Input = styled.input.attrs({
   type: 'search',
   placeholder: 'Search for a country...'
})`
   width:100%;
   margin-left:2rem;
   border:none;
   outline:none;
   background-color:var(--color-bg);
   color:var(--color-text);
`

const Search = ({ search, setSearch }) => {
   return (
      <InputContainer>
         <IoSearchSharp />
         <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      </InputContainer>
   )
}

export default Search