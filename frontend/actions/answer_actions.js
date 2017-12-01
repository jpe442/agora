import * as AnswerAPIUtil from '../util/answer_api_util'

// Action-type constants

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const EDIT_ANSWER_MODE = 'EDIT_ANSWER_MODE'

// thunks 

export const fetchAnswers = () => dispatch => (
  AnswerAPIUtil.fetchAnswers()
    .then(answers => (dispatch(receiveAnswers(answers))))
);

export const fetchAnswer = (id) => dispatch => (
  AnswerAPIUtil.fetchQuestion(id)
    .then(question => (dispatch(receiveQuestion(question))))
)

export const createAnswer = (answer) => dispatch => (
  AnswerAPIUtil.createAnswer(answer)
    .then(answer => (dispatch(receiveAnswer(answer))))
);

export const deleteAnswer = (id) => dispatch => (
  AnswerAPIUtil.deleteAnswer(id)
    .then(answer => (dispatch(removeAnswer(id))))
);

export const updateAnswer = (answer) => dispatch => (
  AnswerAPIUtil.updateAnswer(answer)
    .then(answer => (dispatch(receiveAnswer(answer))))
); 

// internal action creators

const receiveAnswers = (answers) => ({
  type: RECEIVE_ANSWERS,
  answers,
});

const receiveAnswer = (answer) => ({
  type: RECEIVE_ANSWER,
  answer
})

const removeAnswer = (answerId) => ({
  type: REMOVE_ANSWER,
  answerId
})

export const editAnswerMode = (answer) => ({
  type: EDIT_ANSWER_MODE,
  answer
})

