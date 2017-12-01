import * as CommentAPIUtil from '../util/comment_api_util'

// Action-type constants

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT_MODE = 'EDIT_COMMENT_MODE'

// thunks 

export const fetchComments = () => dispatch => (
  CommentAPIUtil.fetchComments()
    .then(comments => (dispatch(receiveComments(comments))))
);

export const fetchComment = (id) => dispatch => (
  CommentAPIUtil.fetchComment(id)
    .then(comment => (dispatch(receiveComment(comment))))
)

export const createComment = (comment) => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(comment => (dispatch(receiveComment(comment))))
);

export const deleteComment = (id) => dispatch => (
  CommentAPIUtil.deleteComment(id)
    .then(comment => (dispatch(removeComment(id))))
);

export const updateComment = (comment) => dispatch => (
  CommentAPIUtil.updateComment(comment)
    .then(comment => (dispatch(receiveComment(comment))))
);

// internal action creators

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments,
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
})

export const editCommentMode = (comment) => ({
  type: EDIT_COMMENT_MODE,
  comment
})

