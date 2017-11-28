import react from 'react';
import { connect } from 'react-redux';
import AskedQuestions from './asked_questions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  questions: state.questions
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  undefined
)(AskedQuestions)