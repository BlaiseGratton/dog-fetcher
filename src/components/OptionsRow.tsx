import React from 'react'
import { connect } from 'react-redux'

import SelectContainer from './SelectContainer'
import { FormState } from '../redux/reducers'
import { fetchRandomImages } from '../redux/thunks'

interface Props {
  index: number,
  rowState: FormState,
  fetchRandomImages: Function
}

const OptionsRow = ({ index, rowState, fetchRandomImages }: Props) => (
  <section>
    <SelectContainer formIndex={index} {...rowState} />
    <button onClick={() => fetchRandomImages(rowState)}>Generate</button>
  </section>
)

export default connect(null, { fetchRandomImages })(OptionsRow)
