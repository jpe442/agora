import React from 'react';
// import { Link } from 'react-router-dom';
import CommentsContainer from './comments_container'

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }


  // componentWillReceiveProps(newProps) {
  //   this.setState(newProps.answer)
  // }


  handleDelete(e) {
    e.preventDefault(e);
    this.props.deleteAnswer(this.props.answer.id)
  };


  handleEdit(e) {
    e.preventDefault(e);
    this.props.editAnswerMode(this.props.answer)
  };  


render() {

  const buttons = this.props.currentUser.id === this.props.answer.rhetor_id ? (
  <div className="rhetor-view">
    <div onClick={this.handleEdit} className="answer-edit">Edit Answer</div>
    <div onClick={this.handleDelete} className="answer-delete">Rescind Answer</div>
  </div>
  ) : (
      <div></div>
    )

  return (
    <div>
      <li
        className="answer-item"
      >
        <div>{buttons}</div>
        <p className="answer-content">{this.props.answer.body}</p>

      </li>
      <div className="comments">
      <div className="comments-list-title">Comments for this Answer</div>
        <CommentsContainer 
        answer={this.props.answer}/>
      </div>
    </div>
  );
  }
}


export default AnswerItem;

  

  


