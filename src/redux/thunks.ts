import { setAllBreeds, setRandomImages } from './actions'
import { getAllBreeds, extractDogBreeds, getRandomImages } from '../services/apiService'
import { Breeds } from '../models'
import { FormState } from '../redux/reducers'

export const getAllDogBreeds = () => async (dispatch: Function) => {
  const res = await getAllBreeds()
  const breeds: Breeds = extractDogBreeds(res)
  dispatch(setAllBreeds(breeds))
}

export const fetchRandomImages = (form: FormState) => async (dispatch: Function) => {
  const res = await getRandomImages(form)
  dispatch(setRandomImages(res.data.message))
}
