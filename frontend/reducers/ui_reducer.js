import merge from 'lodash/merge';

import { TOGGLE_LOADING, TOGGLE_LOGIN_MODAL, TOGGLE_SIGNUP_MODAL } from '../actions/ui_actions';

const _clear= Object.freeze({
  openLoginModal: false,
  openSignUpModal: false,
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
    default:
      return state;
  }
};

export default uiReducer;