import merge from 'lodash/merge';

import { REMOVE_QUESTION, RECEIVE_QUESTIONS, RECEIVE_QUESTION } from '../actions/question_actions';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question})
    case REMOVE_QUESTION:
      let newState = merge({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      console.log("defaultage")
      return state;
  }
};

export default questionsReducer;