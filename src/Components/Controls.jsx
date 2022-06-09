import React, { useState } from 'react'
import { CustomSelect } from './CustomSelect'
import Search from './Search'
import styled from 'styled-components'
import { useEffect } from 'react'

const options = [
   { value: 'Africa', label: 'Africa' },
   { value: 'Asia', label: 'Asia' },
   { value: 'Europe', label: 'Europe' },
   { value: 'America', label: 'America' },
   { value: 'Oceania', label: 'Oceania' },
]

const ControlsWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;

@media(min-width:767px){
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
}
`

const Controls = ({ handleSearch }) => {
   const [search, setSearch] = useState('')
   const [region, setRegion] = useState('')

   useEffect(() => {
      const regionValue = region?.value || ''
      handleSearch(search, regionValue)
      //es-lint-disable-next-line
   }, [search, region])

   return (
      <ControlsWrapper>
         <Search search={search} setSearch={setSearch} />
         <CustomSelect options={options} placeholder='Filter by region' isClearable isSearchable={false} value={region} onChange={setRegion} />
      </ControlsWrapper>
   )
}

export default Controls