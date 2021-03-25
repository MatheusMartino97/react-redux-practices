import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducers';

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
  cartReducer,
});

const store = createStore(rootReducer, extension)

export default store