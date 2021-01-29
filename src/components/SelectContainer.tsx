import React from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'

import { AppState } from '../redux/types'
import { Breeds } from '../models'
import Dropdown from './Dropdown'
import DropdownSource from './DropdownSource'
import ImageCountSelector from './ImageCountSelector'
import { selectBreedType, selectSubbreedType, setImageCount } from '../redux/actions'

interface Props {
  formIndex: number,
  doggos: Breeds,
  selectedBreed: string,
  selectedSubbreed: string,
  imageCount: number,
  setImageCount: Function
}

const BreedDropdown = DropdownSource(
  Dropdown,
  (breeds: Breeds) => Object.keys(breeds),
  selectBreedType,
  'Breed'
)

const SubBreedDropdown = DropdownSource(
  Dropdown,
  (breeds: Breeds, selectedBreed: string) => {
    return breeds[selectedBreed] || []
  },
  selectSubbreedType,
  'Sub-Breed'
)

const SelectContainer = ({ doggos, selectedBreed, selectedSubbreed, imageCount, setImageCount, formIndex }: Props) => {
  return (
    <Grid container spacing={8}>
      <Grid item>
        <BreedDropdown breeds={doggos} formIndex={formIndex} />
      </Grid>
      <Grid item>
        <SubBreedDropdown breeds={doggos} selection={selectedBreed} formIndex={formIndex} />
      </Grid>
      <Grid item>
        <ImageCountSelector value={imageCount} onChange={(value:number) => setImageCount(value, formIndex)} />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state:AppState) => ({
  doggos: state.breeds
})

export default connect(mapStateToProps, { setImageCount })(SelectContainer)
