import merge from 'lodash/merge';

import { TOGGLE_LOADING, 
          TOGGLE_LOGIN_MODAL, 
          TOGGLE_SIGNUP_MODAL, 
          TOGGLE_QUESTION_MODAL, 
          TOGGLE_QEDIT_MODAL } from '../actions/ui_actions';

const _clear= Object.freeze({
  openLoginModal: false,
  openSignUpModal: false,
  openQuestionModal: false,
  openQEditModal: false,
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
    case TOGGLE_QEDIT_MODAL:
      let newQEState = merge({}, state)
      newQEState.openQEditModal = !newQEState.openQEditModal;
      return newQEState;
    default:
      return state;
  }
};

export default uiReducer;