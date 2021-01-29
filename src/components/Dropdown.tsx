import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'

interface Props {
  options: string[],
  onSelect: Function,
  label: string
}

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120
  }
}))

const titleCaseWord = (word: string) => word.charAt(0).toUpperCase() + word.substr(1)

const Dropdown = ({ options, onSelect, label }: Props) => {
  const classes = useStyles()

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select onChange={(event => onSelect(event.target.value))}>
        <MenuItem>-- Select {label} --</MenuItem>
        {options.map(option => <MenuItem value={option}>{titleCaseWord(option)}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default Dropdown
