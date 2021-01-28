import { combineReducers } from 'redux'
import { Breeds } from '../models'

import { StoreActionTypes, SET_DOG_BREEDS } from './types'

const initialState:Breeds = {}

const stateReducer = (state:Breeds = initialState, action:StoreActionTypes): Breeds => {
  switch (action.type) {
    case SET_DOG_BREEDS:
      return action.payload.data
    default:
      return state
  }
}

export default combineReducers({ breeds: stateReducer })
