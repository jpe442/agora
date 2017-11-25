import uiReducer from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  ui: uiReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

