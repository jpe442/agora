import react from 'react';
import { connect } from 'react-redux';
import QuestionDetail from './question_detail';
import { fetchQuestion } from '../../actions/question_actions';
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
  fetchQuestion: id => dispatch(fetchQuestion(id))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionDetail))