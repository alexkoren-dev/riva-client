import { COMMON, COMPENSATION } from '@/constants'
import { privateApi } from '@/utils/request'

// Get all compensations
export const getAllCompensations = (page, limit, search) => {
  return async (dispatch) => {
    try {
      const res = await privateApi.get(
        `/compensation/all?page=${page}&limit=${limit}&search=${search}`
      )
      dispatch({
        type: COMPENSATION.FETCH_COMPENSATION,
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

export const clearCompensations = () => {
  return async (dispatch) => {
    dispatch({
      type: COMPENSATION.CLEAR_COMPENSATION
    })
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
        payload: res.percentile
      })
      return res.percentile
    } catch (err) {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    }
  }
}

// Get recent compensation offer
export const getCompensationOffer = () => {
  return async (dispatch) => {
    try {
      const res = await privateApi.get('/compensation/offer')
      dispatch({
        type: COMPENSATION.OFFERED_COMPENSATION,
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

// Give offer feedback
export const giveOfferFeedback = (id, feedback) => {
  return async (dispatch) => {
    try {
      const res = await privateApi.post(
        `/compensation/feedback/${id}`,
        feedback
      )
      dispatch({
        type: COMPENSATION.OFFERED_COMPENSATION,
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
      return res
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
      const res = await privateApi.put(`/compensation/${data.id}`, data)
      dispatch({
        type: COMPENSATION.USER_COMPENSATION,
        payload: res
      })
      return res
    } catch (err) {
      dispatch({
        type: COMMON.TOP_ALERT,
        payload: { type: 'error', message: err.message }
      })
      throw err
    }
  }
}

// Like a new compensation
export const likeOrDislike = (id, like) => {
  return async (dispatch) => {
    try {
      const res = await privateApi.post(`/compensation/like/${id}`, like)
      dispatch({
        type: COMPENSATION.UPDATE_COMPENSATION,
        payload: res
      })
      return res
    } catch (err) {
      throw err
    }
  }
}

// Post a new comment
export const postComment = (id, comment) => {
  return async (dispatch) => {
    try {
      const res = await privateApi.post(`/compensation/comment/${id}`, comment)
      dispatch({
        type: COMPENSATION.UPDATE_COMPENSATION,
        payload: res
      })
      return res
    } catch (err) {
      throw err
    }
  }
}
