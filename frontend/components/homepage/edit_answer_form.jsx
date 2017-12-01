

import React from 'react';

class EditAnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.answerToEdit.id,
      body: this.props.answerToEdit.body,
      question_id: this.props.question.id,
      rhetor_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const answer = Object.assign({}, this.state);
    this.props.updateAnswer(answer)
    .then(this.props.editAnswerMode({}));
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  render() {
    const { body } = this.state;

    return (
      <div>
        <form className="new-answer-form" >
          <textarea
            rows="5" cols="80"
            className="new-answer-input"
            placeholder="Answer this question here..."
            value={body}
            onChange={this.handleInput('body')}
          />
          <div onClick={this.handleSubmit} className="answer-submit-btn">Update Answer</div>
        </form>
      </div>
    )
  }
}


export default EditAnswerForm;

