import axios, { AxiosResponse } from 'axios'
import { API_BASE_URL } from '../constants'
import { Breeds } from '../models'
import { FormState } from '../redux/reducers'

export const getAllBreeds = () => axios.get(`${API_BASE_URL}breeds/list/all`)

export const extractDogBreeds = (apiResponse:AxiosResponse): Breeds => {
  const data = apiResponse.data.message
  // unpack/restructure anything here
  // since response data is already an object of string keys and string array values, 
  // it satisfies the Breeds type requirements and doesn't need to be cast
  return data
}

export const getRandomImages = (form: FormState) => axios.get(buildURL(form))

const buildURL = ({
  selectedBreed: breed,
  selectedSubbreed: subbreed,
  imageCount: count
}: FormState) =>
  `${API_BASE_URL}breed/${breed}${subbreed ? '/' + subbreed : ''}/images/random/${count}`
