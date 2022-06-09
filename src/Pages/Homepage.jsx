import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";

import List from "./../Components/List";
import Card from "./../Components/Card";
import Controls from "./../Components/Controls";

import { ALL_COUNTRIES } from "./../config";

import { useNavigate } from "react-router-dom";

const Homepage = ({ countries, setCountries }) => {
   const [filteredCountries, setFilteredCountries] = useState([])

   let navigate = useNavigate();

   const handleSearch = (search, region) => {
      let data = [...countries];
      if (region) {
         data = data.filter((country) => country.region.includes(region))
      };
      if (search) {
         data = data.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()))
      };
      setFilteredCountries(data)
   }

   useEffect(() => {
      if (!countries.length)
         axios.get(ALL_COUNTRIES)
            .then(({ data }) => setCountries(data))
   }, [])
   useEffect(() => {
      handleSearch()
   }, [countries])

   return (
      <>
         <Controls handleSearch={handleSearch} />
         <List>
            {filteredCountries.map((country) => {
               const countryInfo = {
                  img: country.flags.png,
                  name: country.name.common,
                  info: [
                     { title: 'Population', description: country.population },
                     { title: 'Region', description: country.region },
                     { title: 'Capital', description: country.capital },
                  ],
               }
               return <Card key={country.name.common} {...countryInfo} onClick={() => navigate(`/country/${country.name.common.toLowerCase()}`)}></Card>
            }
            )}
         </List>
      </>
   )
}

export default Homepage