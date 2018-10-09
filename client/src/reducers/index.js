import { combineReducers } from 'redux';
import books from './BookListReducer'

const reducersIndex = combineReducers({
  books,
})

export default reducersIndex;
