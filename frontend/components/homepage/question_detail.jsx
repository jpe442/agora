import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EditQuestionFormContainer from './edit_question_container'
import Modal from 'react-modal';
import { toggleQEditModal } from '../../actions/ui_actions';


class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.openQEditModal = this.props.openQEditModal;
    this.state = this.props.question;
    this.toggleQEditModal = this.props.toggleQEditModal;
    console.log("here in constructor checking openQEditModal")
    this.deleteQuestion = this.props.deleteQuestion.bind(this);
    console.log(this.props.question)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  // componentWillReceiveProps(newProps) {
  //   this.props.openQEditModal = newProps.openQEditModal;
  // }
  
  handleDelete(e) {
    e.preventDefault(e);
    this.deleteQuestion(this.state.id)
      .then(console.log("testing thunk middlemarks"))
      .then(() => this.props.history.push('/homepage'));
  };

  handleEdit(e) {
    console.log("in handleEdit")
    console.log(this)
    e.preventDefault(e);
    this.toggleQEditModal()
  };
  render() {
   
    console.log("here in question detail")
    // console.log(this.props.question.id)
    console.log(this.openQEditModal)
    console.log("above is status of openQEditModal 2")
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
        
        <Modal
          className="question-edit-modal"
          isOpen={this.openQEditModal}
          onRequestClose={this.toggleQEditModal}>
          <div className="cancelbtn" onClick={this.toggleQEditModal}>X</div>
          <EditQuestionFormContainer
            // ownProps={ownProps}
            // currentUser={currentUser}
            // createQuestion={createQuestion}
            // toggleQEditModal={toggleQuestionModal}
          />From Inside QEdit Modal
        </Modal>
      </div>


    )
  }
}

export default QuestionDetail;