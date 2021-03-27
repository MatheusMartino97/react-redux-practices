import { createStore, combineReducers } from 'redux'
import listProfessionsReducer from '../reducers/listProfessionsReducer'
import workerInfoReducer from '../reducers/workerInfoReducer'
import listEntitiesReducer from '../reducers/listEntitiesReducer'

const rootReducer = combineReducers({
  listProfessionsReducer,
  workerInfoReducer,
  listEntitiesReducer
})

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer,
  extension
)

export default store