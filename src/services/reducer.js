import { combineReducers } from 'redux'
import CommonReducer from './common/reducer'
import AuthReducer from './auth/reducer'
import CompensationReducer from './compensation/reducer'

const reducer = combineReducers({
  common: CommonReducer,
  auth: AuthReducer,
  compensation: CompensationReducer
})

export default reducer
