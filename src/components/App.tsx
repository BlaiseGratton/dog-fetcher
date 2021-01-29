import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import '../App.css'
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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          Dog Fetcher
        </Typography>
      </Toolbar>
    </AppBar>
    <section>
      {rows.map((row, index) => <OptionsRow rowState={row} index={index} key={row.key}/>)}
    </section>
    <section className="add-row-section">
      <Button color="primary"
              variant="contained"
              onClick={() => addRow()}
              startIcon={<AddIcon />}
      >
        Add Row
      </Button>
    </section>
    <ImageModal />
  </section>
)

export default connect((state:AppState) => ({
  rows: state.forms,
  images: state.images
}), { addRow })(App)
