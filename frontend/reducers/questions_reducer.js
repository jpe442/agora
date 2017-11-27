import merge from 'lodash/merge';

import { RECEIVE_QUESTIONS } from '../actions/question_actions';

const questionsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      console.log(action.questions)
      return action.questions;
    default:
      console.log("defaultage")
      return state;
  }
};

export default questionsReducer;