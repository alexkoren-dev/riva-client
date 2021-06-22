import { AUTH, COMMON, COMPENSATION } from '@/constants'
import { publicApi, privateApi } from '@/utils/request'
import axios from 'axios'

// Get User with Token
export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const res = await privateApi.get('/user/current')

      dispatch({
        type: AUTH.SIGNED_IN
      })
      dispatch({
        type: AUTH.USER_INFO,
        payload: res.user
      })
      dispatch({
        type: COMPENSATION.USER_COMPENSATION,
        payload: res.compensation || {}
      })
    } catch (err) {
      dispatch(logOut())
    }
  }
}

// Login
export const login = (obj) => (dispatch) =>
  publicApi
    .post('/user/signin', obj)
    .then((res) => {
      window.localStorage.setItem('accessToken', res.token)
    })
    .catch((err) => {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    })

//Reigster
export const register = (obj) => {
  return (dispatch) => {
    return publicApi
      .post('/user/signup', obj)
      .then((res) => {
        window.localStorage.setItem('accessToken', res.token)
      })
      .catch((err) => {
        dispatch({
          type: COMMON.TOP_ALERT,
          payload: { type: 'error', message: err.message }
        })
        throw err
      })
  }
}

// LinkedIn Authentication
export const linkedinAuthentication = (code) => (dispatch) =>
  publicApi
    .post('/user/linkedin-authenticate', { code })
    .then((res) => {
      window.localStorage.setItem('accessToken', res.token)
    })
    .catch((err) => {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    })

// Reset password & change password
export const resetPwdRequest = (obj) => (dispatch) =>
  publicApi
    .post('/user/reset-password', obj)
    .then((res) => {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: {
          type: 'info',
          message: 'Email sent, Please check your mailbox!'
        }
      })
    })
    .catch((err) => {
      throw err
    })

export const changePassword = (obj, token) => (dispatch) => {
  return axios
    .post(process.env.REACT_APP_API_URL + '/user/change-password', obj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'info', message: res.data.message }
      })
      return res.data.message
    })
    .catch((err) => {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    })
}

export const logOut = () => {
  window.localStorage.removeItem('accessToken')
  return (dispatch) => {
    dispatch({
      type: AUTH.SIGNED_OUT
    })
    dispatch({
      type: COMPENSATION.USER_COMPENSATION,
      payload: {}
    })
  }
}
