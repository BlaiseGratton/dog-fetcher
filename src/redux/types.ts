import { Breeds } from '../models'
import { FormState } from './reducers'

export const SET_DOG_BREEDS = 'SET_DOG_BREEDS'
export const SELECT_BREED = 'SELECT_BREED'
export const SELECT_SUB_BREED = 'SELECT_SUB_BREED'
export const SET_IMAGE_COUNT = 'SET_IMAGE_COUNT'
export const ADD_ROW = 'ADD_ROW'
export const SET_RANDOM_IMAGES = 'SET_RANDOM_IMAGES'

export interface Payload {
  data: any,
  index?: number
}

interface SetDogBreedsAction {
  type: typeof SET_DOG_BREEDS,
  payload: {
    data: Breeds
  }
}

interface SetSelectedBreedAction {
  type: typeof SELECT_BREED,
  payload: {
    data: string,
    index: number
  }
}

interface SetSelectedSubbreedAction {
  type: typeof SELECT_SUB_BREED,
  payload: {
    data: string,
    index: number
  }
}

interface SetImageCountAction {
  type: typeof SET_IMAGE_COUNT,
  payload: {
    data: number,
    index: number
  }
}

interface SetRandomImagesAction {
  type: typeof SET_RANDOM_IMAGES,
  payload: {
    data: URL[]
  }
}

interface AddRowAction {
  type: typeof ADD_ROW
}

export interface AppState {
  breeds: Breeds,
  forms: FormState[],
  images: URL[]
}

export type StoreActionTypes = (
  SetDogBreedsAction
  | SetSelectedBreedAction
  | SetSelectedSubbreedAction
  | SetImageCountAction
  | AddRowAction
  | SetRandomImagesAction
)
