import react from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateComment, createComment, fetchComment, fetchComments, deleteComment, editCommentMode } from '../../actions/comment_actions';
import Comments from './comments'

const mapStateToProps = (state, ownProps) => {
  console.log("here in comments container")
  console.log(state)
  console.log("checking ownProps for answer")
  console.log(ownProps)
  return {
    currentUser: state.session.currentUser,
    answer: ownProps.answer,
    commentToEdit: state.ui.commentToEdit,
    toggleEditCommentMode: state.ui.toggleEditCommentMode,
    comments: state.comments
  }

}

const mapDispatchToProps = (dispatch) => ({
  fetchComment: id => dispatch(fetchComment(id)),
  fetchComments: () => dispatch(fetchComments()),
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: id => dispatch(deleteComment(id)),
  editCommentMode: comment => dispatch(editCommentMode(comment))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments));

