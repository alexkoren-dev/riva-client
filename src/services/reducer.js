import { combineReducers } from 'redux'
import CommonReducer from './common/reducer'
import AuthReducer from './auth/reducer'

const reducer = combineReducers({
  common: CommonReducer,
  auth: AuthReducer
})

export default reducer
