import uiReducer from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import questionsReducer from './questions_reducer';
import commentsReducer from './comments_reducer'
import searchReducer from './search_reducer';
import answersReducer from './answers_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  ui: uiReducer,
  answers: answersReducer,
  session: sessionReducer,
  errors: errorsReducer,
  questions: questionsReducer,
  comments: commentsReducer,
  search: searchReducer,
});


