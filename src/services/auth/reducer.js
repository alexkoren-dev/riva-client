import { AUTH } from '@/constants'

const initState = {
  is_authed: window.localStorage.getItem('accessToken') ? true : false,
  userInfo: null,
  openAuthPopup: false
}

const AuthReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case AUTH.SIGNED_IN:
      return {
        ...state,
        is_authed: true
      }

    case AUTH.SIGNED_OUT:
      return {
        ...state,
        is_authed: false,
        userInfo: null
      }

    case AUTH.USER_INFO:
      return {
        ...state,
        userInfo: Object.assign({}, payload)
      }

    case AUTH.OPEN_MODAL:
      return {
        ...state,
        openAuthPopup: true
      }

    case AUTH.CLOSE_MODAL:
      return {
        ...state,
        openAuthPopup: false
      }

    case AUTH.BACKGROUND_IMAGE_UPLOAD:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          backgroundImage: [...state.userInfo.backgroundImage, payload]
        }
      }

    default:
      return state
  }
}

export default AuthReducer
