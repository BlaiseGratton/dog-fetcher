import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { AppState } from '../redux/types'
import { FormState } from '../redux/reducers'
import OptionsRow from './OptionsRow'
import { addRow } from '../redux/actions'
import ImageModal from './ImageModal'

interface Props {
  rows: FormState[],
  addRow: Function,
  images: URL[]
}

const App = ({ rows, addRow, images }: Props) => (
  <section>
    <section>
      {rows.map((row, index) => <OptionsRow rowState={row} index={index} key={row.key}/>)}
    </section>
    <Button color="primary" variant="contained" onClick={() => addRow()}>Add Row</Button>
    <ImageModal />
  </section>
)

export default connect((state:AppState) => ({
  rows: state.forms,
  images: state.images
}), { addRow })(App)
