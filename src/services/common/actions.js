import { COMMON } from '@/constants'

export const setBackground = (bgImage) => {
  return (dispatch) => {
    localStorage.setItem('background', bgImage)
    dispatch({
      type: COMMON.CHOOSE_BG,
      payload: bgImage
    })
  }
}

export const clearAlert = () => {
  return (dispatch) => {
    dispatch({
      type: COMMON.CLEAR_ALERT
    })
  }
}
