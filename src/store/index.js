import { createStore, combineReducers } from 'redux'
import listProfessonsReducer from '../reducers'

const rootReducer = combineReducers({
  listProfessonsReducer,
})

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore({
  rootReducer,
  extension
})

export default store