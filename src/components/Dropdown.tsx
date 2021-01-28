import React from 'react'

const Option = ({ value }: {value: string}) => (<option value={value}>{value}</option>)

const Dropdown = ({ options, onSelect }: { options: string[], onSelect: Function }) => (
  <select onChange={(event => onSelect(event.target.value))}>
    {options.map(option => <Option key={option} value={option} />)}
  </select>
)

export default Dropdown
