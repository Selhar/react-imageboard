import { ADD_BOOKS_TO_STATE } from '../constants/ActionTypes';

export default (books) => {
  return {
      type: ADD_BOOKS_TO_STATE,
      books
  }
};
