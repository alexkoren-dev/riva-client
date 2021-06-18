import { COMMON } from '@/constants'

const initState = {
  alert: null
}

const CommonReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case COMMON.TOP_ALERT:
      return {
        ...state,
        alert: Object.assign({}, payload)
      }

    case COMMON.CLEAR_ALERT:
      return {
        ...state,
        alert: null
      }

    default:
      return state
  }
}

export default CommonReducer
