import React from 'react';
import { Link } from 'react-router-dom';

export default ({ question }) => {

  return (
    <Link to={`/questions/${question.id}`}>
      <li
        className="question-item"
      >    
        <h3 className="question-title">{question.title}</h3>
      </li>
    </Link>
  );
}