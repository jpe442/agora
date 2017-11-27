import * as QuestionAPIUtil from '../util/question_api_util'

// Action-type constants

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

// thunks 

export const fetchQuestions = () => dispatch => (
  QuestionAPIUtil.fetchQuestions()
    .then(questions => (dispatch(receiveQuestions(questions))))
);

// internal action creators

const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});


