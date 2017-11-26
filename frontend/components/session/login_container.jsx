import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { toggleLoginModal } from '../../actions/ui_actions'
import Login from './login';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  openLoginModal: state.ui.openLoginModal,
  autherrors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  login: formUser => dispatch(login(formUser)),
  toggleLoginModal:() => dispatch(toggleLoginModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);