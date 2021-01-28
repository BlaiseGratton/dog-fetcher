import {
  SET_DOG_BREEDS,
  SELECT_BREED,
  SELECT_SUB_BREED,
  SET_IMAGE_COUNT,
  ADD_ROW,
  StoreActionTypes
} from './types'
import { Breeds } from '../models'

export const setAllBreeds = (breeds: Breeds): StoreActionTypes => {
  return {
    type: SET_DOG_BREEDS,
    payload: {
      data: breeds
    }
  }
}

export const selectBreedType = (selectedBreed: string, index: number): StoreActionTypes => {
  return {
    type: SELECT_BREED,
    payload: {
      data: selectedBreed,
      index
    }
  }
}

export const selectSubbreedType = (selectedSubbreed: string, index: number): StoreActionTypes => {
  return {
    type: SELECT_SUB_BREED,
    payload: {
      data: selectedSubbreed,
      index
    }
  }
}

export const setImageCount = (imageCount: number, index: number): StoreActionTypes => {
  return {
    type: SET_IMAGE_COUNT,
    payload: {
      data: imageCount,
      index
    }
  }
}

export const addRow = (): StoreActionTypes => {
  return {
    type: ADD_ROW
  }
}
