import react from 'react';
import { connect } from 'react-redux';
import QuestionDetail from './question_detail';
import { fetchQuestion, deleteQuestion, updateQuestion } from '../../actions/question_actions';
import { toggleQuestionModal } from '../../actions/ui_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  console.log("above is ownProps")
  console.log(state.questions)
  return {
  currentUser: state.session.currentUser,
  question: state.questions[ownProps.match.params.questionId],
  // questions: state.questions
}}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  toggleQuestionModal: () => dispatch(toggleQuestionModal()),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionDetail))