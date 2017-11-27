import React from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors} from '../../actions/session_actions';
import { toggleLoginModal } from '../../actions/ui_actions'
import Login from './login';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
  openLoginModal: state.ui.openLoginModal,
  autherrors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  login: formUser => dispatch(login(formUser)),
  toggleLoginModal:() => dispatch(toggleLoginModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));