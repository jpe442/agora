import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);
    this.props.login(this.state)
      .then(() => this.props.toggleLoginModal())
        .then(() => this.props.history.push('/homepage'))
          .then(() => this.props.clearSessionErrors())
  };  

  handleGuest(e) {
    e.preventDefault(e);
    this.state = {
      username: "guest",
      password: "guestpassword"
    }
    this.props.login(this.state)
      .then(() => this.props.toggleLoginModal())
        .then(() => this.props.clearSessionErrors())
          .then(() => this.props.history.push('/homepage'));
  };

  render() {
    return (
      <div className="session-form">
        <h2 className="loginmsg">Agora</h2>
        <form>
          <label className="username-session">Username:  
          <input 
              className="username-input"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')} /></label>

          <label className="password-login">Password: 
          <input 
              className="signup-password-input"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
            <div className="session-submit" onClick={this.handleSubmit}>Enter</div>
            <div className="session-guest" onClick={this.handleGuest}>Guest</div>

        </form>
        <ul className="session-report">
          {
            this.props.autherrors.map((error, idx) => (
              <li key={idx} className="session-errors">{error}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Login;