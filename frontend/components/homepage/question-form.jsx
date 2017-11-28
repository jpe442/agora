import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      interlocutor_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
      this.props.createQuestion(question);
      this.props.toggleQuestionModal();
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value });
    }
  }

  render() {
    const { title, body } = this.state
    return (
      <div className="new-form-container">
        <div className="new-form">
          <h3>New Question</h3>
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
              <textarea placeholder="Additional context here..."cols="30" rows="4">
              </textarea>
            </label>
          <button 
          className="question-form-submit-btn"
          onClick={this.handleSubmit}>Propose New Query</button>
          </form>

        </div>
            
      
      
      
      </div>
    )
  }
}


export default QuestionForm;