import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EditQuestionFormContainer from './edit_question_container'
import Modal from 'react-modal';
import AnswerItem from './answers_list_item'
import CreateAnswerForm from './create_answer_form'
import EditAnswerForm from './edit_answer_form'

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.openQEditModal = this.props.openQEditModal;
    this.toggleQEditModal = this.props.toggleQEditModal;
    this.deleteQuestion = this.props.deleteQuestion.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.props.fetchAnswers();
  }

  componentWillReceiveProps(newProps) {
    this.openQEditModal = newProps.openQEditModal;
    this.setState(newProps.question);
  }
  
  handleDelete(e) {
    console.log("about to show question for deletion")
    console.log(this.props.question)
    e.preventDefault(e);
    this.deleteQuestion(this.props.question.id);
    this.props.history.push('/homepage');
  };

  handleEdit(e) {
    e.preventDefault(e);
    this.toggleQEditModal()
  };
  render() {
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
          <h2 className="question-detail-title">{this.props.question.title}</h2>
          <h3 className="interlocutor-name">Interlocutor: {this.props.question.interlocutor.username}</h3>
          <p className="question-detail-body">{this.props.question.body}</p>
          <Link className="detail-to-homepage" to={"/homepage/"}>go back</Link>
        </div>

        
        <div className="answers-detail-main">
          <h3>Answers to This Question</h3>
          {sessionForm}
          <ul className="answers-list">


              {
              answers.reverse().map(answer => 
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