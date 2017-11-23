import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import { combineReducers } from './node_modules/redux/index';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

