import React from 'react';

class QuestionEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.question.title,
      body: this.props.question.body,
      interlocutor_id: this.props.currentUser.id,
      id: question.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  componentWillReceiveProps(newProps) {
  //   console.log("receiving props");
  //   console.log(newProps.openQEditModal)
  //   this.setState(newProps.openQEditModal);
  // }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
    this.props.updateQuestion(question)
      .then(this.props.toggleQEditModal())
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  render() {
    const { title, body } = this.state;
    console.log("this below is what this slice of state is pointing at(edit)")
    console.log(this.state)
    console.log("this below here is what ownProps is pointing to(edit")
    console.log(this.props.ownProps)
    return (
      <div className="new-form-container">
        <div className="new-form">
          <h3>Edit Question</h3>
          <form onSubmit={this.handleSubmit}>
            <label className="question-title-field">
              <input
                type="text"
                placeholder="Your question here..."
                value={title}
                onChange={this.handleInput('title')}
              />
            </label>
            <label className="question-body-field">
              <input
                type="text"
                placeholder="Additional context here..."
                value={body}
                onChange={this.handleInput('body')}
              />
            </label>
            <button
              className="question-form-submit-btn"
              onClick={this.handleSubmit}>Submit</button>
          </form>

        </div>




      </div>
    )
  }
}


export default QuestionEditForm;