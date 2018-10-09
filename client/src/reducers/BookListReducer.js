import { ADD_BOOKS_TO_STATE } from '../constants/ActionTypes';

const defaultState = {
  data: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOKS_TO_STATE:
      return {
        ...state,
        data: action.books
      };
    default:
      return defaultState
  }
}
