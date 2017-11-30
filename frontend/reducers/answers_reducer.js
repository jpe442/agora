import merge from 'lodash/merge';

import { REMOVE_ANSWER, RECEIVE_ANSWERS, RECEIVE_ANSWER } from '../actions/answer_actions';

const answersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWERS:
      return action.answers;
    case RECEIVE_ANSWER:
      return merge({}, state, { [action.answer.id]: action.answer })
    case REMOVE_ANSWER:
      let newState = merge({}, state);
      delete newState[action.answerId];
      return newState;
    default:
      return state;
  }
};

export default answersReducer;