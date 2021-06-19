import { COMPENSATION } from '@/constants'

const initState = {
  userCompensation: null,
  userCompensationPercentile: 0,
  compensationOffer: null,
  allCompensations: []
}

const CompensationReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case COMPENSATION.USER_COMPENSATION:
      return {
        ...state,
        userCompensation: Object.assign({}, payload)
      }

    case COMPENSATION.OFFERED_COMPENSATION:
      return {
        ...state,
        compensationOffer: Object.assign({}, payload)
      }

    case COMPENSATION.COMPENSATION_PERCENTILE:
      return {
        ...state,
        userCompensationPercentile: payload
      }

    case COMPENSATION.FETCH_COMPENSATION:
      return {
        ...state,
        allCompensations: [
          ...state.allCompensations,
          ...Object.assign([], payload)
        ]
      }

    default:
      return state
  }
}

export default CompensationReducer
