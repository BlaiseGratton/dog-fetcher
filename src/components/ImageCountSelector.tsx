import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

interface Props {
  value: number,
  onChange: Function
}

const ImageCountSelector = ({value, onChange}: Props) => (
  <FormControl >
    <TextField value={value}
               onChange={event => onChange(Number(event.target.value))}
               label="# of Images"
               type="number"
    />
  </FormControl>
)

export default ImageCountSelector
