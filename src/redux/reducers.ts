import { combineReducers } from 'redux'
import { Breeds } from '../models'

import {
  StoreActionTypes,
  SET_DOG_BREEDS,
  SELECT_BREED,
  SELECT_SUB_BREED,
  SET_IMAGE_COUNT,
  ADD_ROW
} from './types'

const initialBreedState: Breeds = {}

const allBreedsReducer = (state: Breeds = initialBreedState, action: StoreActionTypes): Breeds => {
  switch (action.type) {
    case SET_DOG_BREEDS:
      return action.payload.data
    default:
      return state
  }
}

export interface FormState {
  selectedBreed: string,
  selectedSubbreed: string,
  imageCount: number
}

const initialFormState = {
  selectedBreed: '',
  selectedSubbreed: '',
  imageCount: 1
}

const formStateReducer = (state: FormState[] = [initialFormState], action: StoreActionTypes): FormState[] => {
  const stateCopy = [...state]

  switch (action.type) {
    case SELECT_BREED: {
      const formToUpdate = stateCopy[action.payload.index]
      formToUpdate.selectedBreed = action.payload.data
      return stateCopy
    }
    case SELECT_SUB_BREED: {
      const formToUpdate = stateCopy[action.payload.index]
      formToUpdate.selectedSubbreed = action.payload.data
      return stateCopy
    }
    case SET_IMAGE_COUNT: {
      const formToUpdate = stateCopy[action.payload.index]
      // API can handle up to 50 random images
      let value = action.payload.data
      if (value < 1)
        value = 1
      if (value > 50)
        value = 50
      formToUpdate.imageCount = value
      return stateCopy
    }
    case ADD_ROW:
      return [...state, {...initialFormState}]
    default:
      return state
  }
}

export default combineReducers({ breeds: allBreedsReducer, forms: formStateReducer })
