import React from 'react'

import SelectContainer from './SelectContainer'
import { FormState } from '../redux/reducers'

interface Props {
  index: number,
  rowState: FormState
}

const OptionsRow = ({ index, rowState }: Props) => (
  <section>
    <SelectContainer formIndex={index} {...rowState} />
    <button>Generate</button>
  </section>
)

export default OptionsRow
