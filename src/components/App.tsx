import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../redux/types'
import { FormState } from '../redux/reducers'
import OptionsRow from './OptionsRow'
import { addRow } from '../redux/actions'

interface Props {
  rows: FormState[],
  addRow: Function
}

const App = ({ rows, addRow }: Props) => (
  <section>
    {rows.map((row, index) => <OptionsRow rowState={row} index={index} key={index}/>)}
    <button onClick={() => addRow()}>Add Row</button>
  </section>
)

export default connect((state:AppState) => ({
  rows: state.forms
}), { addRow })(App)
