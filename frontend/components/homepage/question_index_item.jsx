import React from 'react';



export default ({ question }) => {

  return (
    <li
      className="question-item"
    >
    <h3 className="question-title">{question.title}</h3>
      <p className="question-body">{question.body}</p>
    </li>
  );
}