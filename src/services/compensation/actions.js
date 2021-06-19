import { COMMON, COMPENSATION } from '@/constants'
import { privateApi } from '@/utils/request'

// Get all compensations
export const getUserCompensation = () => {
  return async (dispatch) => {
    try {
      const res = await privateApi.get('/compensation/all')
      dispatch({
        type: COMPENSATION.USER_COMPENSATION,
        payload: res
      })
    } catch (err) {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    }
  }
}

// Get current user's compensation
export const getUserCompensation = () => {
  return async (dispatch) => {
    try {
      const res = await privateApi.get('/compensation')
      dispatch({
        type: COMPENSATION.USER_COMPENSATION,
        payload: res
      })
    } catch (err) {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    }
  }
}

// Get current user's percentile for compensation
export const getUserCompensationPercentile = () => {
  return async (dispatch) => {
    try {
      const res = await privateApi.get('/compensation/percentile')
      dispatch({
        type: COMPENSATION.COMPENSATION_PERCENTILE,
        payload: res
      })
    } catch (err) {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    }
  }
}

// Create a new compensation
export const createCompensation = (data) => {
  return async (dispatch) => {
    try {
      const res = await privateApi.post('/compensation', data)
      dispatch({
        type: COMPENSATION.USER_COMPENSATION,
        payload: res
      })
    } catch (err) {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    }
  }
}

// Update a compensation
export const updateCompensation = (data) => {
  return async (dispatch) => {
    try {
      const res = await privateApi.put(`/compensation/${data._id}`, data)
      dispatch({
        type: COMPENSATION.USER_COMPENSATION,
        payload: res
      })
    } catch (err) {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    }
  }
}
