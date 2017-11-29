import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = this.props.question;
    this.toggleQuestionModal = this.props.toggleQuestionModal.bind(this);
    this.deleteQuestion = this.props.deleteQuestion.bind(this);
    console.log(this.props.question)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }
  
  handleDelete(e) {
    e.preventDefault(e);
    this.deleteQuestion(this.state.id)
      .then(console.log("testing thunk middlemarks"))
      .then(() => this.props.history.push('/homepage'));
  };

  handleEdit(e) {
    e.preventDefault(e);
    this.toggleQuestionModal()
  };
  render() {
   
    console.log("here in question detail")
    // console.log(this.props.question.id)
    console.log(this)
    console.log("above is this")
    const buttons = this.currentUser.id === this.state.interlocutor_id ? (
      <div className="interlocutor-view">
        <div onClick={this.handleEdit} className="question-detail-edit-btn">Edit Question</div>
        <div onClick={this.handleDelete} className="question-detail-delete">Rescind Question</div>
      </div>

    ) : (
      <div></div>
    )
       
    return (
      <div>
        <div className="question-detail-main">
          <div>{buttons}</div>
          {console.log("kk")}
          <h2 className="question-detail-title">{this.state.title}</h2>
          <h3 className="interlocutor-name">Interlocutor: {this.state.interlocutor.username}</h3>
          <p className="question-detail-body">{this.state.body}</p>
          <Link className="detail-to-homepage" to={"/homepage/"}>go back</Link>
        </div>
        <div className="answers-detail-main">Answers will be here listed here...</div>
      </div>
    )
  }
}

export default QuestionDetail;