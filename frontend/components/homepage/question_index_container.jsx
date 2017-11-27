import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions'
import QuestionIndex from './question_index.jsx'
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => ({
  questions: state.questions
});


const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);