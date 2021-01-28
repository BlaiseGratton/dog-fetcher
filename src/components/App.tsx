import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../redux/types'
import { Breeds } from '../models'

interface Props {
  doggos: Breeds
}

const App = ({doggos}:Props) => {
  return (
    <div>
      <ul>
        {Object.entries(doggos).map(([name, subbreeds]) => 
          (<li key={name}>{`${name} ${subbreeds.join(', ')}`}</li>))
        }
      </ul>
    </div>
  )
}

export default connect((state:AppState) => ({
  doggos: state.breeds
}))(App)
