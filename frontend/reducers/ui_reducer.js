import merge from 'lodash/merge';

import { TOGGLE_LOADING, TOGGLE_LOGIN_MODAL, TOGGLE_SIGNUP_MODAL, TOGGLE_QUESTION_MODAL } from '../actions/ui_actions';

const _clear= Object.freeze({
  openLoginModal: false,
  openSignUpModal: false,
  openQuestionModal: false,
});

const uiReducer = (state = _clear, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_SIGNUP_MODAL:
      let newSState = merge({}, state)
      newSState.openSignUpModal = !newSState.openSignUpModal;
      return newSState;
    case TOGGLE_LOGIN_MODAL:
      let newLState = merge({}, state)
      newLState.openLoginModal = !newLState.openLoginModal;
      return newLState;
    case TOGGLE_QUESTION_MODAL:
      let newQState = merge({}, state)
      newQState.openQuestionModal = !newQState.openQuestionModal;
      return newQState;
    default:
      return state;
  }
};

export default uiReducer;