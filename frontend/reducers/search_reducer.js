import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/question_actions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.query;
    case CLEAR_SEARCH_RESULTS:
      return {};
    default:
      return state;
  }
}

export default searchReducer;