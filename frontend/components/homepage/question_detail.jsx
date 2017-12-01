import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EditQuestionFormContainer from './edit_question_container'
import Modal from 'react-modal';
import AnswerItem from './answers_list_item'
import CreateAnswerForm from './create_answer_form'
import EditAnswerForm from './edit_answer_form'

// import { toggleQEditModal } from '../../actions/ui_actions';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.openQEditModal = this.props.openQEditModal;
    // this.state = this.props.question;
    this.toggleQEditModal = this.props.toggleQEditModal;
    console.log("here in constructor checking openQEditModal")
    this.deleteQuestion = this.props.deleteQuestion.bind(this);
    console.log(this.props.question)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.props.fetchAnswers();
  }

  componentWillReceiveProps(newProps) {
    console.log("about to receive props from reup")
    this.openQEditModal = newProps.openQEditModal;
    this.setState(newProps.question);
  }
  
  handleDelete(e) {
    e.preventDefault(e);
    this.deleteQuestion(this.props.quesiton.id)
      .then(console.log("testing thunk middlemarks"))
      .then(() => this.props.history.push('/homepage'));
  };

  handleEdit(e) {
    // console.log("in handleEdit")
    // console.log(this)
    e.preventDefault(e);
    this.toggleQEditModal()
  };
  render() {
    console.log(this.props.toggleEditAnswerMode)
    console.log("here in question detail yo yo")
    // console.log(this.props.question.id)
    console.log(this.openQEditModal)
    console.log("above is status of openQEditModal 2")
    const answers = Object.values(this.props.answers).filter(answer => answer.question_id === this.props.question.id)
    const sessionForm = this.props.toggleEditAnswerMode ? <EditAnswerForm 
                                                  updateAnswer={this.props.updateAnswer}
                                                  currentUser={this.props.currentUser}
                                                  question={this.props.question}
                                                  answerToEdit={this.props.answerToEdit}
                                                  editAnswerMode={this.props.editAnswerMode}
                                                  
    /> : <CreateAnswerForm 
      createAnswer={this.props.createAnswer}
      currentUser={this.props.currentUser}
      question={this.props.question} />

    const buttons = this.props.currentUser.id === this.props.question.interlocutor_id ? (
      <div className="interlocutor-view">
        <div onClick={this.handleEdit} className="question-detail-edit-btn">Edit Question</div>
        <div onClick={this.handleDelete} className="question-detail-delete">Rescind Question</div>
      </div>


    ) : (
      <div></div>
    )
       

    return (
      <div className="question-detail">
        <div className="question-detail-main">
          <div>{buttons}</div>
          {console.log("kk")}
          <h2 className="question-detail-title">{this.props.question.title}</h2>
          <h3 className="interlocutor-name">Interlocutor: {this.props.question.interlocutor.username}</h3>
          <p className="question-detail-body">{this.props.question.body}</p>
          <Link className="detail-to-homepage" to={"/homepage/"}>go back</Link>
        </div>

        
        <div className="answers-detail-main">
          <h3>Answers to This Question</h3>
          {sessionForm}
          <ul className="answers-list">
            {console.log("here is answers list next")}
            {console.log(this.props.question.answers)}

              {
              answers.map(answer => 
              <AnswerItem 
              className="answer-spot"
              key={answer.id} 
              answer={answer}
              editAnswerMode={this.props.editAnswerMode}
              currentUser={this.props.currentUser}
              deleteAnswer={this.props.deleteAnswer}
              updateAnswer={this.props.updateAnswer}

              />
              ) 

            }
          </ul>
        </div>
        
        <Modal
          className="question-modal"
          isOpen={this.openQEditModal}
          onRequestClose={this.toggleQEditModal}>
          <div className="cancelbtn" onClick={this.toggleQEditModal}>X</div>
          <EditQuestionFormContainer
          />
        </Modal>
      </div>


    )
  }
}

export default QuestionDetail;