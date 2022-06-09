import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
   styles: {
      control: (provided) => ({
         ...provided,
         background: 'var(--color-ui-base)',
         color: 'var(--color-text)',
         borderRadius: 'var(--radii)',
         padding: '0.25rem',
         border: 'none',
         boxShadow: 'var(--shadow)',
      }),
      menuList: (provided) => ({
         ...provided,
         cursor: 'pointer',
         color: 'var(--color-text)',
         background: 'var(--color-bg)',
      }),
      singleValue: (provided) => ({
         ...provided,
         color: 'var(--color-text)',
      }),
      option: (provided, state) => ({
         ...provided,
         cursor: 'pointer',
         color: 'var(--color-text)',
         background: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)',
         background: state.isFocused ? 'var(--color-ui-alt)' : 'var(--color-bg)',
      }),
   }
})`
   width:200px;
   border-radius:var(--radii);
   font-family:var(--ffamily);
   border:none;
`