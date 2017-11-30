import * as QuestionAPIUtil from '../util/question_api_util'

// Action-type constants

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

// thunks 

export const fetchQuestions = () => dispatch => (
  QuestionAPIUtil.fetchQuestions()
    .then(questions => (dispatch(receiveQuestions(questions))))
);

export const fetchQuestion = (id) => dispatch => (
  QuestionAPIUtil.fetchQuestion(id)
    .then(question => (dispatch(receiveQuestion(question))))
)

export const createQuestion = (question) => dispatch => (
  QuestionAPIUtil.createQuestion(question)
    .then(question => (dispatch(receiveQuestion(question))))
);

export const deleteQuestion = (id) => dispatch => (
  QuestionAPIUtil.deleteQuestion(id)
    .then(question => (dispatch(removeQuestion(id))))
);

export const updateQuestion = (question) => dispatch => (
  QuestionAPIUtil.updateQuestion(question)
    .then(question => (dispatch(receiveQuestion(question))))
);

export const searchQuestions = (query) => dispatch => (
  QuestionAPIUtil.searchQuestions(query)
    .then(questions => (dispatch(receiveSearchResults(questions))))
);

// internal action creators

const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
})

const removeQuestion = (questionId) => ({
  type: REMOVE_QUESTION,
  questionId
})

const receiveSearchResults = (query) => ({
  type: RECEIVE_SEARCH_RESULTS,
  query
})

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
})

