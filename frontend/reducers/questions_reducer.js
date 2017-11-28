import merge from 'lodash/merge';

import { RECEIVE_QUESTIONS, RECEIVE_QUESTION } from '../actions/question_actions';

const questionsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return state.concat(action.question)
    default:
      console.log("defaultage")
      return state;
  }
};

export default questionsReducer;