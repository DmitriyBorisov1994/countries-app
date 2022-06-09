import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from "react-router-dom";
import { countrySearch } from '../config';
import Button from '../Components/Button';
import Info from '../Components/Info';

const Description = () => {
   const { name } = useParams()
   const navigate = useNavigate();
   const [country, setCountry] = useState(null)

   useEffect(() => {
      axios.get(countrySearch(name))
         .then(({ data }) => setCountry(data[0]))
   }, [name])

   console.log(country)

   return (
      <div>
         <Button onClick={() => { console.log('click'); navigate(-1) }}><IoArrowBack /> Back</Button>
         {country && <Info navigate={navigate} {...country} />}
      </div>
   )
}

export default Description