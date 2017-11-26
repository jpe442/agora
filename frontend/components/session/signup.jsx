import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.errors = this.props.autherrors

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.toggleSignUpModal())
        .then(() => this.props.clearSessionErrors())
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2 className="loginmsg">Register</h2>
        <form>
          <label className="username-session">Username:
          <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')} /></label>
          <label className="user-email">Email:
          <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} /></label>
          <label className="password-signup">Password:
          <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
            </label>
          <div className="session-submit" onClick={this.handleSubmit}>Register</div>
        </form>
        <ul className="session-report">
          {
            this.props.autherrors.map((error, idx) => (
              <li className="session-errors" key = {idx}>{error}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Signup;