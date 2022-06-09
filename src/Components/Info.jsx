import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { codeFilter } from '../config'

const InfoWrapper = styled.section`
   padding:3rem 0rem;
   wdith:100%;
   display:grid;
   grid-template-columns:100%;
   gap:2rem;

   @media(min-width:767px){
      grid-template-columns:minmax(100px, 400px) 1fr;
      align-items:center;
      gap: 5rem;
   };
   @media(min-width:1024px){
      grid-template-columns:minmax(400px, 600px) 1fr;
   };
`

const InfoImage = styled.img`
   display:block;
   width:100%;
   height:100%;
   object-fit:contain;
`

const InfoTitle = styled.h2`
   margin:0;
   font-weight:var(--fw-normal);
`
const ListGroup = styled.div`
   display:flex;
   flex-direction: column;
   gap:2rem;

   @media(min-width:1024px){
      flex-direction:row;
      gap:4rem;
   };
`

const List = styled.ul`
   list-style:none;
   margin:0;
   padding:0;
`
const ListItem = styled.li`
   line-height:2;
   &>b{
      font-weight:var(--fw-bold);
   }
`
const Meta = styled.div`
   margin-top:3rem;
   display:flex;
   gap:1rem;
   flex-direction:column;
   align-items:flex-start;

   @media(min-width:767px){
      flex-direction:row;
      align-items:center;
      gap:1rem;
   };
`
const TagGroup = styled.div`
   display:flex;
   flex-wrap:wrap;
   gap:1rem;
`

const Tag = styled.span`
   padding:0 1rem;
   background-color:var(--colors-ui-base);
   box-shadow:var(--shadow);
   border-radius:var(--radii);
   line-height:1.5rem;
   cursor:pointer;

`

const Info = (props) => {

   const {
      name: {
         common,
         nativeName
      },
      flags,
      capital,
      population,
      region,
      subregion,
      currencies,
      languages,
      borders = [],
      navigate
   } = props

   const [neighbours, setNeighbours] = useState([])

   useEffect(() => {
      if (borders.length)
         axios.get(codeFilter(borders))
            .then(({ data }) => setNeighbours(data.map((n) => n.name.common)))
   }, [borders])


   const objectToJsx = (obj) => {
      for (let key in obj) {
         if (obj === currencies) {
            return <span>{obj[key].name}</span>
         }
         if (obj === nativeName) {
            return <span>{obj[key].official}</span>
         }
         return <span>{obj[key]}</span>
      }
   }

   return (
      <InfoWrapper>
         <InfoImage src={flags.png} alt={common} />
         <div>
            <InfoTitle>{common}</InfoTitle>
            <ListGroup>
               <List>
                  <ListItem><b>Native name: </b>{objectToJsx(nativeName)}</ListItem>
                  <ListItem><b>Population: </b>{population}</ListItem>
                  <ListItem><b>Region: </b>{region}</ListItem>
                  <ListItem><b>Subregion: </b>{subregion}</ListItem>
                  <ListItem><b>Capital: </b>{capital}</ListItem>
               </List>
               <List>
                  <ListItem><b>Currencies: </b>{objectToJsx(currencies)}</ListItem>
                  <ListItem><b>Languages: </b>
                     {objectToJsx(languages)}
                  </ListItem>
               </List>
            </ListGroup>
            <Meta>
               <b>Borders:</b>
               {neighbours.length
                  ? <TagGroup>
                     {neighbours.map(b => <Tag key={b} onClick={() => navigate(`/country/${b.toLowerCase()}`)}>{b}</Tag>)}
                  </TagGroup>
                  : <span>There is no border countries</span>}
            </Meta>
         </div>
      </InfoWrapper>
   )
}

export default Info