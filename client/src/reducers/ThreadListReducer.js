import { ADD_THREADS_TO_STATE } from '../constants/ActionTypes';

const defaultState = {
  data: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_THREADS_TO_STATE:
      return {
        ...state,
        data: action.threads
      };
    default:
      return defaultState
  }
}
