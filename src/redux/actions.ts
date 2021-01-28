import { SET_DOG_BREEDS, StoreActionTypes } from './types'
import { Breeds } from '../models'

export const setAllBreeds = (breeds:Breeds): StoreActionTypes => {
  return {
    type: SET_DOG_BREEDS,
    payload: {
      data: breeds
    }
  }
}
