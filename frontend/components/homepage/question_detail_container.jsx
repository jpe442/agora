import react from 'react';
import { connect } from 'react-redux';
import QuestionDetail from './question_detail';
import { fetchQuestion, deleteQuestion, updateQuestion } from '../../actions/question_actions';
import { createAnswer, deleteAnswer, updateAnswer, editAnswerMode, fetchAnswers } from '../../actions/answer_actions';
import { toggleQEditModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // if (!state.ui.openQEditModal) {
  //   let openEditQuestionModal = false;
  //   console.log("here in mapStateToProps")
  //   console.log(openEditQuestionModal)
  // }else{
  //   let openEditQuestionModal = state.ui.openQEditModal;
  // }
  
  console.log(state.session.currentUser)
  console.log("above is currentUser")
  return {
    openQEditModal: state.ui.openQEditModal,
    currentUser: state.session.currentUser,
    question: state.questions[ownProps.match.params.questionId],
    answerToEdit: state.ui.answerToEdit,
    toggleEditAnswerMode: state.ui.toggleEditAnswerMode,
    answers: state.answers
  // questions: state.questions
}}

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  toggleQEditModal: () => dispatch(toggleQEditModal()),
  createAnswer: answer => dispatch(createAnswer(answer)),
  deleteAnswer: id => dispatch(deleteAnswer(id)),
  updateAnswer: answer => dispatch(updateAnswer(answer)),
  editAnswerMode: answer => dispatch(editAnswerMode(answer)),
  fetchAnswers: () => dispatch(fetchAnswers()),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionDetail))