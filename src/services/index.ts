import { IResponse } from 'types/image'
import { axios } from 'utils/axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || ''

export const getImage = () => {
  return axios.get<IResponse>(BASE_URL, {
    params: {
      key: process.env.REACT_APP_API_KEY,
      q: 'dog',
      per_page: 200,
    },
  })
}
