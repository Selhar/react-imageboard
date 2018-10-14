import { ADD_THREADS_TO_STATE } from '../constants/ActionTypes';

export default (threads) => {
  return {
      type: ADD_THREADS_TO_STATE,
      threads
  }
};
