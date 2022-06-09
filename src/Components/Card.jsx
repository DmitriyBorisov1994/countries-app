import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.article`
   border-radius:var(--radii);
   background-color:var(--colors-ui-base);
   box-shadow:var(--shadow);
   cursor:pointer;
   overflow:hidden;
`
const StyledCardImg = styled.img`
   display:block;
   width:100%;
   height:180px;
   object-fit:cover;
   object-position:center;
   box-shadow:var(--shadow);
`
const StyledCardBody = styled.div`
   padding:1rem 1.5rem 2rem;
`
const StyledCardTitle = styled.h2`
   font-size:var(--fs-md);
   font-weight:var(--fw-bold);
`
const StyledCardList = styled.ul`
   list-style:none;
   margin:0;
   padding:1rem 0 0; 
`
const StyledCardListItem = styled.li`
font-size:var(--fs-sm);
line-height:1.5;
font-weight:var(--fw-light);
   & > b{
      font-weight:var(--fw-bold);
   }
`

const Card = ({ img, name, info = [], onClick }) => {
   return (
      <StyledCard onClick={onClick}>
         <StyledCardImg src={img} />
         <StyledCardBody>
            <StyledCardTitle>{name}</StyledCardTitle>
            <StyledCardList>
               {info.map(el => <StyledCardListItem key={el.title}>
                  <b>{el.title}: </b>{el.description}
               </StyledCardListItem>)}
            </StyledCardList>
         </StyledCardBody>
      </StyledCard>
   )
}

export default Card