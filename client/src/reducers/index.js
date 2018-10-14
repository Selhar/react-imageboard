import { combineReducers } from 'redux';
import threads from './ThreadListReducer'

const reducersIndex = combineReducers({
  threads,
})

export default reducersIndex;
