import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({

})

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer,
  extension
)

export default store