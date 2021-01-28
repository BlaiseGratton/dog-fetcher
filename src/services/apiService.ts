import axios, { AxiosResponse } from 'axios'
import { ALL_DOG_BREEDS_URL } from '../constants'
import { Breeds } from '../models'

export const getAllBreeds = () => axios.get(ALL_DOG_BREEDS_URL)

export const extractDogBreeds = (apiResponse:AxiosResponse): Breeds => {
  const data = apiResponse.data.message
  // unpack/restructure anything here
  // since response data is already an object of string keys and string array values, 
  // it satisfies the Breeds type requirements and doesn't need to be cast
  return data
}
