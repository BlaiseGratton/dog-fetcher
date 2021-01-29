import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import { clearImages } from '../redux/actions'

interface Props {
  images: URL[],
  clearImages: Function
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '75vw',
    height: '85vh',
  },
}))

const getRandomColspan = () => Math.ceil(Math.random() * 2)

const ImageModal = ({ images, clearImages }: Props) => {
  const handleClose = () => clearImages()
  const classes = useStyles()

  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={Boolean(images.length)}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
    >
      <Fade in={Boolean(images.length)}>
        <section>
          <div className={classes.root}>
            <GridList cellHeight={320} cols={4} className={classes.gridList}>
              {images.map(url => (
                 <GridListTile key={url.toString()} cols={getRandomColspan()}>
                   <img src={url.toString()} alt='a random dog' />
                 </GridListTile>
               ))
              }
            </GridList>
          </div>
        </section>
      </Fade>
    </Modal>
  )
}

const mapStateToProps = ({images}: {images: URL[]}) => ({ images })

export default connect(mapStateToProps, { clearImages })(ImageModal)
