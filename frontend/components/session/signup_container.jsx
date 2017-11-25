import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { toggleLoginModal} from '../../actions/ui_actions'
import Signup from './signup';
import { toggleSignUpModal } from '../../actions/ui_actions';

const mapDispatchToProps = (dispatch) => ({
  signup: formUser => dispatch(signup(formUser)),
  toggleSignUpModal: () => dispatch(toggleSignUpModal())
});

export default connect(undefined, mapDispatchToProps)(Signup);