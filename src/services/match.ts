import { IResponse } from 'types/image'
import { IUser } from 'types/match'
import { axios } from 'utils/axios'
import { getName, getInfo } from './mock'

const BASE_URL = process.env.REACT_APP_BASE_URL || ''

export const getUsersApi = () =>
  getImageApi().then((res): IUser[] =>
    res.hits.map((hit) => ({
      id: hit.id,
      name: getName(),
      info: getInfo(),
      previewSrc: hit.previewURL,
      imgSrc: hit.largeImageURL,
    }))
  )

export const getImageApi = () =>
  axios
    .get<IResponse>(BASE_URL, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        q: 'dog',
        per_page: 30,
      },
    })
    .then((res) => res.data)
