import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import HomePage from './question_index.jsx';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  questions: this.state.questions,
})

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage))