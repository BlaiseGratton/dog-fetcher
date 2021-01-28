import React from 'react';
import { connect } from 'react-redux'

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
  selectBreedType
)

const SubBreedDropdown = DropdownSource(
  Dropdown,
  (breeds: Breeds, selectedBreed: string) => {
    return breeds[selectedBreed] || []
  },
  selectSubbreedType
)

const SelectContainer = ({ doggos, selectedBreed, selectedSubbreed, imageCount, setImageCount, formIndex }: Props) => {
  return (
    <section>
      <BreedDropdown breeds={doggos} formIndex={formIndex} />
      <SubBreedDropdown breeds={doggos} selection={selectedBreed} formIndex={formIndex} />
      <ImageCountSelector value={imageCount} onChange={(value:number) => setImageCount(value, formIndex)} />
    </section>
  )
}

const mapStateToProps = (state:AppState) => ({
  doggos: state.breeds
})

export default connect(mapStateToProps, { setImageCount })(SelectContainer)
