import merge from 'lodash/merge';

import { REMOVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_COMMENTS } from '../comments/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment })
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;