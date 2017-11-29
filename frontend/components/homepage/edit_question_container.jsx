import react from 'react';
import { connect } from 'react-redux';
import QuestionEditForm from './edit_question';
import { fetchQuestion, deleteQuestion, updateQuestion } from '../../actions/question_actions';
import { toggleQEditModal } from '../../actions/ui_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log("this above is own props in edit question container")
  return {
    currentUser: state.session.currentUser,
    question: state.questions[ownProps.match.params.questionId],
    ownProps: ownProps,
    // questions: state.questions
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  // deleteQuestion: id => dispatch(deleteQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  toggleQEditModal: () => dispatch(toggleQEditModal()),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionEditForm))