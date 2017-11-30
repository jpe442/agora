import { RECEIVE_SEARCH_RESULTS } from '../actions/question_actions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.query;
    default:
      return state;
  }
}

export default searchReducer;