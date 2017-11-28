import react from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import AskedQuestions from './asked_questions'
import { fetchQuestions } from '../../actions/question_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  questions: state.questions
})

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AskedQuestions))