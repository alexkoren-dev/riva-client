import axios from 'axios'

const publicApi = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

publicApi.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data)
)

const privateApi = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

privateApi.interceptors.request.use(
  (config) => {
    if (!config.withoutAuth) {
      config.headers.Authorization = `Bearer ${window.localStorage.getItem(
        'accessToken'
      )}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error.response.data)
  }
)

privateApi.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error.response.data)
  }
)

export { publicApi, privateApi }
