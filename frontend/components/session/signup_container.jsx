import React from 'react';
import { connect } from 'react-redux';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import { toggleSignUpModal } from '../../actions/ui_actions';
import Signup from './signup';


const mapStateToProps = (state) => ({
  autherrors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
  signup: formUser => dispatch(signup(formUser)),
  login: formUser => dispatch(login(formUser)),
  toggleSignUpModal: () => dispatch(toggleSignUpModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);