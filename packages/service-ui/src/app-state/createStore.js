import { createStore as reduxCreateStore } from "redux"
import {combineReducers} from 'redux'
import reducers from './reducers'

const count = (state={count: 0}, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const createStore = () => reduxCreateStore(
    combineReducers(reducers) , 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default createStore