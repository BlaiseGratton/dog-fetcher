import { Breeds } from '../models'

export const SET_DOG_BREEDS = 'SET_DOG_BREEDS'

export interface Payload {
  data: any
}

interface SetDogBreedsAction {
  type: typeof SET_DOG_BREEDS,
  payload: {
    data: Breeds
  }
}

export interface AppState {
  breeds: Breeds
}

export type StoreActionTypes = SetDogBreedsAction
