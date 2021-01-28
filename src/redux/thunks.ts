import { setAllBreeds } from './actions'
import { getAllBreeds, extractDogBreeds } from '../services/apiService'
import { Breeds } from '../models'

export const getAllDogBreeds = () => async (dispatch:Function) => {
  const res = await getAllBreeds()
  const breeds: Breeds = extractDogBreeds(res)
  dispatch(setAllBreeds(breeds))
}
