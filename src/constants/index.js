// Redux Type Constants
export const COMMON = {
  TOP_ALERT: 'TOP_ALERT',
  CHOOSE_BG: 'CHOOSE_BG',
  CLEAR_ALERT: 'CLEAR_ALERT'
}

export const AUTH = {
  SIGNED_IN: 'SIGNED_IN',
  SIGNED_OUT: 'SIGNED_OUT',
  USER_PROFILE: 'USER_PROFILE',
  USER_INFO: 'USER_INFO',
  UPDATE_USER: 'UPDATE_USER',
  BACKGROUND_IMAGE_UPLOAD: 'BACKGROUND_IMAGE_UPLOAD'
}

export const COMPENSATION = {
  USER_COMPENSATION: 'USER_COMPENSATION',
  OFFERED_COMPENSATION: 'OFFERED_COMPENSATION',
  FETCH_COMPENSATION: 'FETCH_COMPENSATION',
  COMPENSATION_PERCENTILE: 'COMPENSATION_PERCENTILE'
}

export const COMMON_VALIDATE_MESSAGES = {
  required: 'Please enter ${label}',
  types: {
    email: 'Please enter a valid ${label}'
  },
  string: {
    min: '${label} must be at least 6 characters long'
  }
}
