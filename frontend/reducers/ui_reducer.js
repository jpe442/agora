import merge from 'lodash/merge';

import { TOGGLE_LOADING, TOGGLE_MODAL } from '../actions/ui_actions';

const _clear= Object.freeze({
  openModal: false,
});

const uiReducer = (state = _clear, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      let newState = merge({}, state)
      newState.openModal = !newState.openModal
      return newState;
    default:
      return state;
  }
};

export default uiReducer;