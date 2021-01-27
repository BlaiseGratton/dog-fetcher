import { combineReducers } from 'redux'

import { Payload } from './types'

const initialState = {}

const stateReducer = (state = initialState, action:Payload): {} => {
  return state
}

export default combineReducers({ stateReducer })
