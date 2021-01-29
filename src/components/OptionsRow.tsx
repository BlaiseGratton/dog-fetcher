import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import SelectContainer from './SelectContainer'
import { FormState } from '../redux/reducers'
import { fetchRandomImages } from '../redux/thunks'

const useStyles = makeStyles(theme => ({
  generateButton: {
    marginTop: 10
  },
  formContainer: {
    marginTop: 10
  }
}))

interface Props {
  index: number,
  rowState: FormState,
  fetchRandomImages: Function
}

const rowIsInvalid = (row: FormState) => !row.selectedBreed || !row.imageCount

const OptionsRow = ({ index, rowState, fetchRandomImages }: Props) => {
  const classes = useStyles()

  return (
    <Paper>
      <Grid className={classes.formContainer}
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
      >
        <Grid item>
          <SelectContainer formIndex={index} {...rowState} />
        </Grid>
        <Grid item>
          <Button disabled={rowIsInvalid(rowState)}
                  variant="contained"
                  color="primary"
                  className={classes.generateButton}
                  onClick={() => fetchRandomImages(rowState)}
          >Generate</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default connect(null, { fetchRandomImages })(OptionsRow)
