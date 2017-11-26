import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    console.log(this.props)
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.toggleLoginModal())
       .then(() => this.props.clearSessionErrors());
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2 className="loginmsg">Enter Agora</h2>
        <form>
          <label>Username:
          <input type="text"
              value={this.state.username}
              onChange={this.handleInput('username')} /></label>

          <label>Password:
          <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
            <button onClick={this.handleSubmit}>Log In</button>
        </form>
        <ul>Errors:
          {
            this.props.autherrors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Login;