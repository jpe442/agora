import React from 'react';
import { Link } from 'react-router-dom';

export default ({ answer, currentUser, deleteAnswer, updateAnswer }) => {

  const handleDelete = (e) => {
    e.preventDefault(e);
    deleteAnswer(answer.id)
  };

  
  const handleEdit = (e) => {
    e.preventDefault(e);
    console.log(updateAnswer)
    updateAnswer(answer.id)
  };

  const buttons = currentUser.id === answer.rhetor_id ? (
    <div className="rhetor-view">
      <div onClick={handleEdit} className="answer-detail-edit-btn">Edit Answer</div>
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