import { COMPENSATION } from '@/constants'

const initState = {
  userCompensation: {},
  userCompensationPercentile: null,
  compensationOffers: [],
  allCompensations: [],
  totalCount: 0
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
        compensationOffers: Object.assign([], payload)
      }

    case COMPENSATION.UPDATE_COMPENSATION:
      let newOffers = state.compensationOffers.map(
        (obj) => [payload].find((o) => o.id === obj.id) || obj
      )
      let newCompensationList = state.allCompensations.map(
        (obj) => [payload].find((o) => o.id === obj.id) || obj
      )
      return {
        ...state,
        compensationOffers: Object.assign([], newOffers),
        allCompensations: Object.assign([], newCompensationList)
      }

    case COMPENSATION.COMPENSATION_PERCENTILE:
      return {
        ...state,
        userCompensationPercentile: payload
      }

    case COMPENSATION.CLEAR_COMPENSATION:
      return {
        ...state,
        allCompensations: [],
        totalCount: 0
      }

    case COMPENSATION.FETCH_COMPENSATION:
      return {
        ...state,
        totalCount: payload.totalCount,
        allCompensations: [
          ...state.allCompensations,
          ...Object.assign([], payload.compensations)
        ]
      }

    default:
      return state
  }
}

export default CompensationReducer
