import React from 'react';
import { Link } from 'react-router-dom';

export default ({ answer, currentUser, deleteAnswer }) => {

  const handleDelete = (e) => {
    e.preventDefault(e);
    deleteAnswer(answer.id)
  };

  const buttons = currentUser.id === answer.rhetor_id ? (
    <div className="rhetor-view">
      {/* <div onClick={this.handleEdit} className="question-detail-edit-btn">Edit Question</div> */}
      <div onClick={handleDelete} className="answer-delete">Rescind Answer</div>
    </div>

  ) : (
      <div></div>
    )

  return (
      <li
        className="answer-item"
      >
      <div>{buttons}</div>

        <p className="answer-content">{answer.body}</p>
      </li>
  );
}