import React from 'react'

interface Props {
  value: number,
  onChange: Function
}

const ImageCountSelector = ({value, onChange}: Props) => (
  <input value={value} onChange={event => onChange(Number(event.target.value))} type="number"/>
)

export default ImageCountSelector
